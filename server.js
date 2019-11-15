const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static(path.join(__dirname + '/public')));

// Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access
const routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start the sever so that it can begin listening to client side requests
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);

});