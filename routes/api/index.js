// An index file to gather the API routes and export them for use

// Dependencies
// Server connection
const router = require('express').Router();
// User Routes
const userRoutes = require('./user-routes.js');

// Define routes for the router to use
router.use('/users', userRoutes);

// Export the router
module.exports = router;