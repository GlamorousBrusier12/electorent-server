//Verify Token Function
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.js";
import { User } from "../models/User.js";
export default async function verifyToken(req, res, next) {
  const bearerHeader = req.body.headers["Authorization"];

  //Check if token is present
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[2];
    req.token = bearerToken;
    jwt.verify(req.token, SECRET_KEY, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user = await User.findOne({ emailid: authData.user.useremail });
        req.user = user;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}
