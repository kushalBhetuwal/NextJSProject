import { Schema, models, model, Document } from "mongoose";

export interface Iuser extends Document {
  clerkId: String;
  name: String;
  username: String;
  email: String;
  password?: String;
  bio?: String;
  picture: String;
  location?: String;
  portfolio_Link?: String;
  reputation?: String;
  join_date: Date;
}

// creating a model:
const userSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolio_Link: { type: String },
  reputation: { type: String, default: 0 },
  join_date: { type: Date, default: Date.now() },
});

const User = models.User || model("User", userSchema);

export default User;
