const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const Question = require('../models/Question.js');

const questions = [
  {
    question: '¿Quieres comer?',
    author: '5af1e1c3dfea31aec28e9dc8',
    endDate: '2020-08-23 19:43:31.365',
    location: 'Londres',
    counter: 0
  },
  {
    question: '¿Te gusta viajar?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Miami',
    counter: 0
  },
  {
    question: '¿Quieres morir en el intento?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Rusia',
    counter: 0
  },
  {
    question: '¿Quieres empezar a trabajar?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Amsterdam',
    counter: 0
  },
  {
    question: '¿Atracamos un banco?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Berlín',
    counter: 0
  },
  {
    question: '¿Vamos al cine?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Nueva York',
    counter: 0
  },
  {
    question: '¿Compramos esta mesa?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Oslo',
    counter: 0
  },
  {
    question: '¿Un café?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'San Francisco',
    counter: 0
  },
  {
    question: '¿Quieres aprender cosas nuevas?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Pekín',
    counter: 0
  },
  {
    question: '¿Tienes frio?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'Lyon',
    counter: 0
  },
  {
    question: '¿Nos vamos a cenar?',
    userauthor: '5af1e1c3dfea31aec28e9dc6',
    endDate: '2018-06-01 19:43:31.365',
    location: 'París',
    counter: 0
  }
]

Question.collection.drop()

Question.create(questions, (err, questionDocs) => {
  if (err) { throw(err) }
  const question = questionDocs[0];
  console.log(`Question ${question._id} created`);
});