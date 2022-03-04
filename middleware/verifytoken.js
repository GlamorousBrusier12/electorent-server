//Verify Token Function

module.exports = function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];

  //Check if token is present

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
