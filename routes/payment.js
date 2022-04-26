import express from "express";
import "dotenv/config";
export const paymentRouter = express.Router();

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

paymentRouter.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        // price: "{price_1KsH9USD3dBrJmKpYH25jbGP}",
        price: "price_1KsImGSD3dBrJmKpp1hsz2Gi",
        quantity: 1,
      },
      {
        price: "price_1KsH9USD3dBrJmKpYH25jbGP",
        quantity: 1,
      },
    ],
    mode: "payment",
    // success_url: `${YOUR_DOMAIN}?success=true`,
    // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    success_url: `http://localhost:3000/confirmation`,
    cancel_url: `http://localhost:3000/`,
  });

  res.redirect(303, session.url);
});
