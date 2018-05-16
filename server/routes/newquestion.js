const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const Answer = require("../models/Answer");
const _ = require("lodash");

const fields = Object.keys(_.omit(Question.schema.paths, ["__v", "_id"]));

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  Question.create(ph)
    .then(quests => res.json(quests))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  // console.log('entra')
  // console.log(req.params.id)
  Question.findById(req.params.id)
    .then(quest => res.json(quest))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);
  Question.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(quests => res.json(quests))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Question.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});


module.exports = router;
