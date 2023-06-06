const router = require('express').Router();
const itemController = require('../../controllers/item-controller');

router.get('/:name', async (req, res) => {
  itemController.getItemName(req, res)
});

module.exports = router