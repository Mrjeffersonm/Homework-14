const router = require('express').Router();
const newUserForm = require('./new-user-form');
const loginUserForm = require('./login-form')

router.use('/new-user', newUserForm);
router.use('/login', loginUserForm);

module.exports = router;
