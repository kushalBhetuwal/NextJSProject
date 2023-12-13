import { Schema, models, model, Document } from "mongoose";

export interface IQuestion extends Document {
  title: String;
  content: String;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

// creating a model:
const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "answers" }],
  createdAt: { type: Date, default: Date.now() },
});

const Question = models.Question
  ? models.Question.schema === QuestionSchema
    ? models.Question
    : model("Question", QuestionSchema)
  : model("Question", QuestionSchema);

export default Question;
