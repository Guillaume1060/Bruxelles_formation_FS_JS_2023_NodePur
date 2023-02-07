const express = require("express");
const router = express.Router({ mergeParams: true });

router.route("/:id").get((req, res) => {
  console.log("route test");
  console.log(req.params);
  //   res.json({
  //     clients,
  //   });
});

module.exports = router;
