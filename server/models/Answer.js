const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    answer: { enum: ['yes', 'not', 'no answer'] },
    question: { type: Schema.Types.ObjectId, ref: 'Question' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;
