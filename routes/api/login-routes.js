const router = require('express').Router();
const loginController = require('../../controllers/login-controller');
// The `/api/login` endpoint

// {
//     "": "name",
//     "password": "mypassowrd"
// }


router.post('/', async (req, res) => {
  loginController.login(req, res)
});


module.exports = router;
