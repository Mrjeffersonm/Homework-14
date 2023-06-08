const asyncHandler = require('express-async-handler')
const { User } = require('../models');

exports.login = asyncHandler(async (req, res) => {
  console.log(req.body)
  const user_name = req.body.user_name
  const user_password = req.body.password
  const user = await User.findOne({
    attributes: ['user_name','id'],
    where: {
      user_name: user_name,
      password: user_password,
    },
  })
  req.session.user = user;
  req.session.authenticated = true;
  res.redirect('/api/posts');
});

exports.logout = asyncHandler(async (req, res) => {
    req.session.destroy();
    res.redirect('/api/posts');
})