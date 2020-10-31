// An index file to gather the routes to export to the server

// Dependencies
// Server connection
const router = require('express').Router();
// API routes folder
const apiRoutes = require('./api');
// The handlebars routes
const homeRoutes = require('./home-routes.js');

// Define a path for the handlebars html routs
router.use('/', homeRoutes);

// Define the path for the server for the API routes
router.use('/api', apiRoutes);

// Define a catch-all route for any resource that doesn't exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;