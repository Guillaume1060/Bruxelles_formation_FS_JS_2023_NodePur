const express = require("express");
const router = express.Router({ mergeParams: true });
const clients = require("../datas/clients");
const commandeController = require("../controllers/commandeController");

// /api/v1/clients/:id/commandes
router.route("/").get(commandeController.getAll);

router
  .route("/:orderId")
  .get(commandeController.getOne)
  .put(commandeController.update)
  .delete(commandeController.delete);

module.exports = router;
