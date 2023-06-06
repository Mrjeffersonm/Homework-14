//replace the modes/index.js file with this file

// import models
const User = require('./User');
const Item = require('./Item.js')

// // Products belongsTo Category
// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
// }); 
// // Categories have many Products
// Category.hasMany(Product);
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   // as: 'product_tags',
//   foreignKey: 'product_id',
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   // as: 'product_tags',
//   foreignKey: 'tag_id',
// });

User.hasMany(Item);

Item.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  User,
  Item,
};
