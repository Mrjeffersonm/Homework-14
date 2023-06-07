const router = require('express').Router();
const newUserForm = require('./new-user-form');
const loginUserForm = require('./login-form');
const postForm = require('./post-form');
const updatePostForm = require('./update-post-form')

router.use('/new-user', newUserForm);
router.use('/login', loginUserForm);
router.use('/blog-post', postForm);
router.use('/update-post', updatePostForm);

module.exports = router;
