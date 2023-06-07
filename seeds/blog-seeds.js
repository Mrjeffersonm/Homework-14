const { BlogPost } = require('../models');

const blogPost = [
  
];

const seedBlog = () => BlogPost.bulkCreate(blogPost);

module.exports = seedBlog;