const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    title: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    why: String,
    endDate: Date,
    location: String, // 2dsphere
    answer: { enum: ['yes', 'not', 'no answer'] }
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
