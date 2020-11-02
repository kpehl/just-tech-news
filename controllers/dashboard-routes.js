const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// A route to render the dashboard page, only for a logged in user
router.get('/', (req, res) => {
    res.render('dashboard', { loggedIn: true })
})

module.exports = router;