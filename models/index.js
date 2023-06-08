//replace the modes/index.js file with this file

// import models
const User = require('./User');
const BlogPost = require('./blog-post');
const Comment = require('./Comment');

User.hasMany(BlogPost);

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

BlogPost.hasMany(Comment);

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id',
});

User.hasMany(Comment);

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = {
  User,
  BlogPost,
  Comment,
};
