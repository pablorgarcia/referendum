const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

/* GET home page */
router.get("/", (req, res, next) => {
  Question.find()
    .then( quest => {
      res.render("index", { user: req.user, quest });
    })
    .catch(err => { console.log(err); });
});

module.exports = router;
