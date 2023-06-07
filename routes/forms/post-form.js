const router = require('express').Router();

router.get('/', async (req, res) => {
  return res.render('post-form');
});


module.exports = router;