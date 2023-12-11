import mongoose from "mongoose";

let isConnected: boolean = false;

export const ConnectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("missing the mongodb url");

  if (isConnected) return console.log("mongodb is connected:");
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "stackoverflow",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
