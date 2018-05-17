const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    location: Object,
    endDate: String,
    counter: { type: Number, default: 0 }
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
