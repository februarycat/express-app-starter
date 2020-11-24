const router = require("express").Router();

router.get("/", (_, res) => {
  res.json({
    message: "API V1",
  });
});

module.exports = router;
