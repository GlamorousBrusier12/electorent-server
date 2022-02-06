var express = require("express");
var router = express.Router();

// test route for api
router.get("/api", function (req, res) {
  res.status(200).json({ message: "ok" });
});

module.exports = router;
