// An index file to gather the models and export them for use

// User model
const User = require('./User');
// Post model
const Post = require('./Post');

// Create associations between the models
// User-Post relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Export the modules
module.exports = { User, Post };