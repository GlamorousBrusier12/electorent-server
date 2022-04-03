import express from "express";
import logger from "morgan";
import { indexRouter } from "./routes/index.js";
import { PORT } from "./config/config.js";
import { db } from "./config/mongoose.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const app = express();
const swaggerDocument = YAML.load("./swagger.yaml");
import cors from "cors";
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

app.listen(PORT, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${PORT}`);
});
