import express from "express";
import logger from "morgan";
import { indexRouter } from "./routes/index.js";
import { PORT } from "./config/config.js";
import { db } from "./config/mongoose.js";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

app.listen(PORT, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${PORT}`);
});
