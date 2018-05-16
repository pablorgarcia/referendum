const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/referendum');

const User = require('../models/User.js');

const users = [
  {
    username: 'a',
    lastname: 'la',
    password: bcrypt.hashSync('a', 10),
    email: 'a@a.a',
    age: 32,
    genre: 'Mujer',
    location: [ { city:'Madrid', country:'España', continent:'Europa' } ],
    questions: []
  },
  {
    username: 'b',
    lastname: 'lb',
    password: bcrypt.hashSync('b', 10),
    email: 'b@b.b',
    age: 18,
    genre: 'Hombre',
    location: [ { city:'Sao Paulo', country:'Brasil', continent:'America del Sur' } ],
    questions: []
  },
  {
    username: 'c',
    lastname: 'lc',
    password: bcrypt.hashSync('c', 10),
    email: 'c@c.c',
    age: 22,
    genre: 'Mujer',
    location: [ { city:'Oslo', country:'Noruega', continent:'Europa' } ],
    questions: []
  },
  {
    username: 'd',
    lastname: 'ld',
    password: bcrypt.hashSync('d', 10),
    email: 'd@d.d',
    age: 24,
    genre: 'Hombre',
    location: [ { city:'Nueva York', country:'EEUU', continent:'America del Norte' } ],
    questions: []
  },
  {
    username: 'e',
    lastname: 'le',
    password: bcrypt.hashSync('e', 10),
    email: 'e@e.e',
    age: 44,
    genre: 'Mujer',
    location: [ { city:'Berlín', country:'Alemania', continent:'Europa' } ],
    questions: []
  }
]

User.collection.drop()

User.create(users, (err, userDocs) => {
  if (err) { throw(err) }
  const user = userDocs[0];
  console.log(`User ${user._id} created`);
});
