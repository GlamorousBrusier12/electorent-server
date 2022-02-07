import express from "express";
import logger from "morgan";
import "dotenv/config";
import { indexRouter } from "./routes/index.js";
const port = process.env.PORT || 5000;
import { db } from "./config/mongoose.js";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${port}`);
});
