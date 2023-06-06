const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(session({
  secret: 'ahjgryuihlzn',
  resave: false,
  saveUninitialized: false,
  
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// sync sequelize models to the database, then turn on the server
const sync = async () => {
  await sequelize.sync();
};
sync();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
