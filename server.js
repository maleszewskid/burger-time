const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);

});
