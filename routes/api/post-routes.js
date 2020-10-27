// Dependencies
// Express.js connection
const router = require('express').Router();
// User model and Post model
const { User, Post, Vote } = require('../../models');
// Sequelize database connection
const sequelize = require('../../config/connection');

// Routes

// GET api/posts/ -- get all posts
router.get('/', (req, res) => {
    Post.findAll({
        // Query configuration
        // From the Post table, include the post ID, URL, title, and the timestamp from post creation, as well as total votes
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
          ],
        // Order the posts from most recent to least
        order: [[ 'created_at', 'DESC']],
        // From the User table, include the post creator's user name
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    // return the posts
    .then(dbPostData => res.json(dbPostData))
    // if there was a server error, return the error
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET api/posts/:id -- get a single post by id
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        // specify the post id parameter in the query
        id: req.params.id
      },
      // Query configuration, as with the get all posts route
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // if no post by that id exists, return an error
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        // if a server error occured, return an error
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST api/posts -- create a new post
router.post('/', (req, res) => {
    // expects object of the form {title: 'Sample Title Here', post_url: 'http://somestring.someotherstring', user_id: 1}
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT api/posts/upvote -- upvote a post (this route must be above the update route, otherwise express.js will treat upvote as an id)
router.put('/upvote', (req, res) => {
    // create an upvote with the user id of the voter and the post id of the upvoted post
    Vote.create({
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    // find the post just voted on and return the updated data for the post, including updated vote count
    .then( () => {
        return Post.findOne({
            where: {
                id: req.body.post_id
            },
            attributes: [
                'id',
                'post_url',
                'title',
                'created_at',
                // use a raw MySQL query to get the vote count, because votes are in a separate table, so findAndCountAll() will not work
                [
                    sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                    'vote_count'
                ]
            ]
        })
    })
    // return the data, or an error if one occurs
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err))
});

// PUT api/posts/1-- update a post's title
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// DELETE api/posts/1 -- delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;