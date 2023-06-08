const router = require('express').Router();
const userController = require('../../controllers/user-controller')
const User = require('../../models/User')
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  userController.getUser(req, res)
});

router.get('/:id', async (req, res) => {
  userController.getUserId(req, res)
});

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const createdUser = await User.create(req.body)
    req.session.user = createdUser;
    req.session.authenticated = true;
    res.redirect('/api/posts');
  }
  catch(err) {
      res.send(
          JSON.stringify({error: err.message}, null, 2)
      )
  }
});

router.put('/:id', async (req, res) => {
  userController.updateUser(req, res)
});

router.delete('/:id', async (req, res) => {
  userController.deleteUser(req, res)
});

module.exports = router;
