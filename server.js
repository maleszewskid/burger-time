const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use('/public', express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
