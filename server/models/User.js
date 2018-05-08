const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    lastname: String,
    password: String,
    email: String,
    age: Number,
    genre: String,
    location: [ { city: String, country: String, continent: String } ], // y si me conecto a un API que dandole la ciudad me de el pais y continente?
    questions: [ { type: Schema.Types.ObjectId, ref: 'Question' } ]
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
