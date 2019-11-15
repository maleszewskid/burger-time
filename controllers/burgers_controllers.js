var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var variable = {
            burgers: data
        };
        console.log(variable)
        res.render("index", variable)
    });
});
router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/")
    })
})
router.put("/api/burgers/:id", function (req, res) {
  var condition = req.params.id;

  burger.update(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
