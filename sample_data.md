# Sample Data to Use For the Heroku Database

Here is some sample data to use to populate the Heroku database.  Add the users, add the posts, then add the comments and the votes using your app of choice, e.g. Insomnia Core or Postman.  Test out all the routes either with your app for the GET routes, you can use a browser window.

## Add a user
POST request to https://quiet-thicket-58359.herokuapp.com/api/users

`{
    "username": "Kenny",
	"email": "kenny@gmail.com",
	"password": "password1234"
}`

`{
    "username": "Lenny",
	"email": "lenny@gmail.com",
	"password": "password6789"
}`

`{
    "username": "Manny",
	"email": "manny@gmail.com",
	"password": "WeakPassword!"
}`

## Add a post
POST request to https://quiet-thicket-58359.herokuapp.com/api/posts

`{
  "title": "Taskmaster Goes Public!",
	"post_url": "https://taskmaster.com/press",
	"user_id": 3
}`

`{
  "title": "RunBuddy reaches 1 million subscribers!",
	"post_url": "https://runbuddy.com/press",
	"user_id": 2
}`

`{
  "title": "Zookeepr Deployed!",
	"post_url": "https://zookeepr.com/press",
	"user_id": 1
}`

## Add a comment
POST request to https://quiet-thicket-58359.herokuapp.com/api/comments 

`{
	"comment_text": "This article is awesome!",
	"user_id": 1,
	"post_id": 1
}`

`{
	"comment_text": "This article is awesome too!",
	"user_id": 1,
	"post_id": 2
}`

`{
	"comment_text": "This article is way awesome!",
	"user_id": 1,
	"post_id": 3
}`

`{
	"comment_text": "Way to go, team!",
	"user_id": 2,
	"post_id": 1
}`

`{
	"comment_text": "Love the penguins!",
	"user_id": 2,
	"post_id": 3
}`

`{
	"comment_text": "Gotta plan my next vist!",
	"user_id": 3,
	"post_id": 3
}`

## Add a vote
PUT request to https://quiet-thicket-58359.herokuapp.com/api/posts

`{
  "user_id": 1,
  "post_id": 1
}`

`{
  "user_id": 1,
  "post_id": 2
}`

`{
  "user_id": 1,
  "post_id": 3
}`

`{
  "user_id": 2,
  "post_id": 1
}`

`{
  "user_id": 3,
  "post_id": 1
}`

`{
  "user_id": 3,
  "post_id": 3
}`

## Update a post title by id
PUT request to https://quiet-thicket-58359.herokuapp.com/api/posts/2  (for updating the post with an id of 2)

`{
	"title": "RunBuddy hits 2 million subscribers!"
}`

## Log in a user
POST request to https://quiet-thicket-58359.herokuapp.com/api/users/login

`{
	"email": "kenny@gmail.com",
	"password": "password1234"
}`

## Update an existing user
PUT request to https://quiet-thicket-58359.herokuapp.com/api/users/1

`{
	"email": "kennyG@gmail.com"
}`

## Delete a comment by id
DELETE request to https://quiet-thicket-58359.herokuapp.com/api/comments/1

## Delete a post by id
DELELTE request to https://quiet-thicket-58359.herokuapp.com/api/posts/1

## Delete a user by id
DELTETE request to https://quiet-thicket-58359.herokuapp.com/api/users/1

## Get information, either with your app or with Heroku in a broswer window
Get all users: https://quiet-thicket-58359.herokuapp.com/api/users

Get user by id: https://quiet-thicket-58359.herokuapp.com/api/users/1

Get all posts: https://quiet-thicket-58359.herokuapp.com/api/posts

Get a post by id: https://quiet-thicket-58359.herokuapp.com/api/posts/1 

Get all comments: https://quiet-thicket-58359.herokuapp.com/api/comments
