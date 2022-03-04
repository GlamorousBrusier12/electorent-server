const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const verifyToken = require("../middleware/verifytoken");

app.get("/", (req, res) => {
  res.json({
    message: "Success!",
  });
});

app.post("/payment", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Succesfully Verified.",
        authData,
      });
    }
  });
});
app.post("/login", (req, res) => {
  const user = {
    id: 1,
    emailid: "ravindra.t19@iiits.in",
    username: "Ravindra Tholuchuru",
  };
  jwt.sign({ user }, "secretkey", { expiresIn: "40s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is up and running at port 8000.");
});
