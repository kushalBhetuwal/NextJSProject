import { Schema, models, model, Document } from "mongoose";

export interface Itag extends Document {
  name: String;
  description: String;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

// creating a tag model:

const tagSchema = new Schema({
  name: { type: String, required: true, unique:true },
  description: { type: String, required: true },
  questions: { type: Schema.Types.ObjectId, ref: "Question" },
  followers: { type: Schema.Types.ObjectId, ref: "User" },
  createdOn: { type: Date, default: Date.now() },
});

// creating a tagmodel

const tagModel = models.Tag
  ? models.Tag.schema === tagSchema
    ? models.Tag
    : model("Tag", tagSchema)
  : model("Tag", tagSchema);

export default tagModel;
