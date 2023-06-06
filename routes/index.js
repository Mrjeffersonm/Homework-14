const router = require('express').Router();
const apiRoutes = require('./api');
const formRoutes = require('./forms')

router.use('/api', apiRoutes);
router.use('/forms', formRoutes)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;