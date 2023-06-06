const router = require('express').Router();
const itemController = require('../../controllers/item-controller');

router.get('/', async (req, res) => {
  itemController.listItems(req, res)
});

router.get('/:id', async (req, res) => {
  itemController.getItemID(req, res)    
});

router.post('/', async (req, res) => {
    itemController.createItem(req, res)
});

module.exports = router;