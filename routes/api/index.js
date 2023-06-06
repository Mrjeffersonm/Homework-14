const router = require('express').Router();
const userRoutes = require('./user-routes');
const loginRoutes = require('./login-routes');
const itemRoutes = require('./item-routes');
const findItemRoutes = require('./find-item-routes');
const logoutRoutes = require('./logout-routes');

router.use('/user', userRoutes);
router.use('/login', loginRoutes)
router.use('/items', itemRoutes);
router.use('/find-item', findItemRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;
