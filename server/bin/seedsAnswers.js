const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const Answer = require('../models/Answer.js');

const answers = [
  {
    answer: 'yes',
    question: '¿Quieres comer?',
    author: '5af1e1c3dfea31aec28e9dc8',
    //why: 'porque tengo hambre',
  },
  {
    answer: 'yes',
    question: '¿Quieres comer?',
    author: '5af1e1c3dfea31aec28e9dc8',
    //why: 'porque tengo hambre',
  }
]

Answer.collection.drop()

Answer.create(Answers, (err, answerDocs) => {
  if (err) { throw(err) }
  const answer = answerDocs[0];
  console.log(`Answers ${answer._id} created`);
});