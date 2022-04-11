import express from "express";
import logger from "morgan";
import fs from "fs";
import path from "path";
import { indexRouter } from "./routes/index.js";
import { PORT } from "./config/config.js";
import { db } from "./config/mongoose.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import morgan from "morgan";
const app = express();
import { fileURLToPath } from "url";
import { dirname } from "path";
const swaggerDocument = YAML.load("./swagger.yaml");
import cors from "cors";
import { multerUploads } from "./middleware/multer.js";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fsr from "file-stream-rotator";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.patch("/upload", multerUploads, async (req, res) => {
//   try {
//     if (req.file) {
//       console.log(req.file);
//       console.log(cloudinary.config().cloud_name);
//       const image = await cloudinary.uploader.upload(req.file.path);
//       console.log(image);
//       // const imageResult = await cloudinaryConfig.uploader.upload(req.file.path);
//       // // const imageResult = await uploader(req.file.path);
//       // console.log(imageResult);
//       return res.send(image.url);
//     }
//     res.send("hi");
//   } catch (error) {
//     console.log("error in  upload", error);
//     res.status(500).end();
//   }
// });
app.use("/api", indexRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let logsinfo = fsr.getStream({
  filename: "test.log",
  frequency: "1h",
  verbose: true,
});
app.use(morgan("combined", { stream: logsinfo }));

app.listen(PORT, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${PORT}`);
});
