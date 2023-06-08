const router = require('express').Router();
const apiRoutes = require('./api');
const formRoutes = require('./forms')

router.use('/api', apiRoutes);
router.use('/forms', formRoutes)

router.use((req, res) => {
  res.redirect('/api/posts')
});


module.exports = router;