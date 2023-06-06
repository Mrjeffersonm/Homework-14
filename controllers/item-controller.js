const asyncHandler = require('express-async-handler');
const { Item, User } = require('../models');

exports.listItems = asyncHandler(async (req, res) => {
    const items = await Item.findAll({
  
    });
    res.send(
      JSON.stringify(items, null, 2)
    )
});

exports.getItemID = asyncHandler(async (req, res) => {
    const item_id = req.params.id
    const items = await Item.findAll({
        where: {
            id: item_id,
        }
    });
    res.send(
      JSON.stringify(items, null, 2)
    )
});

exports.createItem = asyncHandler(async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const item = {...req.body, user_id: user_id}
        const createItem = await Item.create(item)
        res.send(
          JSON.stringify(createItem, null, 2)
        )
      }
      catch(err) {
        
        res.send(
          JSON.stringify({error: err.message}, null, 2)
        )
      }
});

exports.getItemName = asyncHandler(async (req, res) => {
    console.log(`${JSON.stringify(req.session.user)}`)
    const itemName = req.params.name
    const item = await Item.findAll({
      where: {
        item_name: itemName
      },
      include: [
        {
          model: User,
          attributes:['user_name', 'island_code']
        }
      ]
    })
    res.send(
      JSON.stringify(item, null, 2)
    )
});