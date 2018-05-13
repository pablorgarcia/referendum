const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    answer: { enum: ['yes', 'no', 'dont know'] },
    question: { type: Schema.Types.ObjectId, ref: 'Question' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
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
