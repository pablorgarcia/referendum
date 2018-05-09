const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    endDate: Date,
    location: String, // 2dsphere
    counter: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
