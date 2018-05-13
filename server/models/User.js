const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    lastname: String,
    password: String,
    email: String,
    age: Number,
    genre: String, // Hombre, Mujer, Otro, Prefiero-no decirlo
    location: [ {city: String , country: String ,  continent: String } ], // y si me conecto a un API que dandole la ciudad me de el pais y continente?
    questionsCreated: [ { type: Schema.Types.ObjectId, ref: 'Question' } ],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
