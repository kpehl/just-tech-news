// User facing routes from handlebars
//Dependencies
// Router
const router = require('express').Router();

// Route to get the homepage
router.get('/', (req, res) => {
  res.render('homepage');
});

// Export the router
module.exports = router;