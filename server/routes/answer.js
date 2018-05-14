const express = require("express");
const router = express.Router();
const Answer = require("../models/Answer");
const _ = require("lodash");

const fields = Object.keys(_.omit(Answer.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Answer.find()
    .then(answers => res.json(answers))
    .catch(e => next(e));
});

 // Create
router.post("/", (req, res, next) => {
 // console.log('entraaaa');
 // console.log(req.body);
  const ph = _.pick(req.body, fields);
  Answer.create(ph)
    .then(answers => res.json(answers))
    .catch(e => next(e));
});

router.get("/:idQuestion", (req, res, next) => {
  Answer.find({question: req.params.idQuestion})
    .then(answers => res.json(answers))
    .catch(e => next(e));
});
/*
// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Answer.findById(req.params.id)
    .then(answers => res.json(answers))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  Answer.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(answers => res.json(answers))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Answer.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
}); */

module.exports = router;
