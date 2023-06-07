const router = require('express').Router();
const userRoutes = require('./user-routes');
const loginRoutes = require('./login-routes');
const logoutRoutes = require('./logout-routes');
const blogPostRoutes = require('./blog-post-routes')

router.use('/user', userRoutes);
router.use('/login', loginRoutes)
router.use('/logout', logoutRoutes);
router.use('/posts', blogPostRoutes)

module.exports = router;
