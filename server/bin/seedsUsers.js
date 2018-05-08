const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const Reply = require('../models/Question.js');
const User = require('../models/User.js');

const users = [
  {
    username: 'a',
    lastname: 'la',
    password: bcrypt.hashSync('a', 10),
    email: 'a@a.a',
    age: 32,
    genre: 'Mujer',
    location: [ {city:'Madrid', country:'España', continent:'Europa'} ], // y si me conecto a un API que dandole la ciudad me de el pais y continente?
    questions: []
  },
  {
    username: 'b',
    lastname: 'lb',
    password: bcrypt.hashSync('b', 10),
    email: 'b@b.b',
    age: 18,
    genre: 'Hombre',
    location: [ {city:'Sao Paulo', country:'Brasil', continent:'America del Sur'} ], // y si me conecto a un API que dandole la ciudad me de el pais y continente?
    questions: []
  }
]

User.collection.drop()

User.create(users, (err, userDocs) => {
  if (err) { throw(err) }
  const user = userDocs[0];
  console.log(`User ${user._id} created`);
});