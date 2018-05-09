const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const Answer = require('../models/Answer.js');

const answers = [
  {
    answer: 'not',
    question: '5af3076ca60bf3cd7ffacd5c',
    author: '5af1e1c3dfea31aec28e9dc8',
  }
]

Answer.collection.drop()

Answer.create(answers, (err, answerDocs) => {
  if (err) { throw(err) }
  const answer = answerDocs[0];
  console.log(`Answers ${answer._id} created`);
});
