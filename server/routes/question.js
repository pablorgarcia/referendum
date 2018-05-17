const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const Answer = require("../models/Answer");
const _ = require("lodash");

const fields = Object.keys(_.omit(Question.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Question.find()
    .sort({counter: -1})
    .then(quests => res.json(quests))
    .catch(e => next(e));
});

// por parametros
/*
Cambias el get por un post
Con el fin de mandarle en el body el objeto location del user
Que contiene la ciudad, pais, y continente.
Aqui dentro haces tres queries, cada con uno de esos campos.
y pusheas a un array cada respuesta
*/
router.post("/location", (req, res, next) => {
  let questions = [];
  
  Question.find({location: req.body.location.city})
    .sort({counter: -1})
    .then(quests => {
      questions.push(quests);
      Question.find({location: req.body.location.country})
        .then(quests => {
          questions.push(quests);
            Question.find({location: req.body.location.continen})
            .then(quests => {
              questions.push(quests);
            })
    })
    .catch(e => next(e));
    })
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  Question.create(ph)
    .then(quests => res.json(quests))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  console.log('entra')
  Question.findById(req.params.id)
    .then(quest => {res.json(quest);console.log(quest)})
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

/* // Retrive DETAIL
router.get("/answer/:id", (req, res, next) => {
  Answer.findById(req.params.id)
    .then(answers => res.json(answers))
    .catch(e => next(e));
}); */

module.exports = router;
