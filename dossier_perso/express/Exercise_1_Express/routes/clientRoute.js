const express = require("express");
const clients = require("../datas/clients");
const router = express.Router();
const clientController = require("../controllers/clientController");

// ROUTE VERS COMMANDES
const commandeRoute = require("../routes/commandeRoute");
router.use("/:id/commandes", commandeRoute);

// GET ALL /api/v1/clients
router.route("/").get(clientController.getAll);

// // GET /api/v1/clients/:id
router
  .route("/:id")
  .get(clientController.getOne)
  .put(clientController.update)
  .delete(clientController.delete);

module.exports = router;
