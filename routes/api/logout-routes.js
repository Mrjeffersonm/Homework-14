const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/login-controller');

router.get('/', (req, res) => {
    loginController.logout(req, res)
});

module.exports = router;