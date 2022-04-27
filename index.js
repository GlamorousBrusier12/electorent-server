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
import fsr from "file-stream-rotator";
const swaggerDocument = YAML.load("./swagger.yaml");
import cors from "cors";
import "dotenv/config";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan Middleware

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let logStream = fsr.getStream({
  filename: "file.log ",
  frequency: "1h",
  verbose: true,
});
// let logStream = fs.createWriteStream(path.join(__dirname, "file.log"), {
//   flags: "a",
// });
app.use(
  morgan(":method :url :status :date[iso] :response-time ms", {
    stream: logStream,
  })
);

// Stripe API

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Learn React Today" }],
//   [2, { priceInCents: 20000, name: "Learn CSS Today" }],
// ]);

// app.post("/payment", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         const storeItem = storeItems.get(item.id);
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `http://localhost:3000/confirmation`,
//       cancel_url: `http://localhost:3000/cart`,
//     });
//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.use("/api", indexRouter);

app.listen(PORT, (e) => {
  if (e) {
    return console.log("error in starting the router");
  }
  console.log(`server is up and runnning on port ${PORT}`);
});
