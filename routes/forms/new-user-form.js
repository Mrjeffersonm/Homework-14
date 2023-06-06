const router = require('express').Router();

router.get('/', async (req, res) => {
  return res.render('new-user');
});


module.exports = router;
