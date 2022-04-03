//Verify Token Function
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.js";
export default async function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];

  //Check if token is present

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(req.token, SECRET_KEY, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const user = await User.findOne({ emailid: authData.user.emailid });
        req.user = user;
        res.json({
          message: "Succesfully Verified.",
          email: authData.user.emailid,
          authData,
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
}
