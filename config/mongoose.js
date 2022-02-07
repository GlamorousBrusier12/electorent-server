// Configuration for the mongo(ose, Db)
import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;
export const db = mongoose.connect(MONGO_URL, (e) => {
  if (e) {
    return console.error("error in connection to the database: ", e);
  }
  console.log("Connected to the databse");
});
