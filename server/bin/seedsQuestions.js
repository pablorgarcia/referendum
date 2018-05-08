const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const Question = require('../models/Question.js');

const questions = [
  {
    title: '¿Quieres comer?',
    user: '5af1e1c3dfea31aec28e9dc8',
    why: 'porque tengo hambre',
    endDate: '2020-08-23 19:43:31.365',
    location: 'Londres',
    answer: 'yes'
  },
  {
    title: '¿Te gusta viajar?',
    user: '5af1e1c3dfea31aec28e9dc6',
    why: 'tengo vacaciones',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Miami',
    answer: 'not'
  }
]

Question.collection.drop()

Question.create(questions, (err, questionDocs) => {
  if (err) { throw(err) }
  const question = questionDocs[0];
  console.log(`Question ${question._id} created`);
});