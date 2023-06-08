const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.authenticated !== true) {
    return res.redirect('/forms/login')
  }
  return res.render('post-form', {user: req.session.user});
});


module.exports = router;