const { Item } = require('../models');

const itemData = [
  
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;