const express = require("express");
const clients = require("../datas/clients");
const commandeRoute = require("../routes/commandeRoute");

const router = express.Router();

// COMMANDES
router.use("/:id/commandes", commandeRoute);

// GET ALL /api/v1/clients
router.route("").get((req, res) => {
  res.json({
    clients,
  });
});

// // GET /api/v1/clients/:id
router
  .route("/:id")
  .get((req, res) => {
    const client = clients.find((client) => client.id == req.params.id);
    res.json({
      client,
    });
  })
  .put((req, res) => {
    const client = clients.find((client) => client.id == req.params.id);
    client.first_name = req.body.first_name;
    res.json({
      client,
      message: "first_name modifiée",
    });
  })
  .delete((req, res) => {
    const ClientToDelete = clients.findIndex(
      (client) => client.id == req.params.id
    );
    clients.splice(ClientToDelete, 1);
    res.json({
      message: "client supprimé",
    });
  });

// // GET ALL /api/v1/clients/commandes
router.route("/:id/commandes").get((req, res) => {
  const client = clients.find((client) => client.id == req.params.id);
  res.json({
    commandes: client.commandes,
  });
});

// // GET ALL /api/v1/clients/:id/commandes/:id
router
  .route("/:id/commandes/:orderId")
  .get((req, res) => {
    let client = clients.find((client) => client.id == req.params.id);
    let commandesClient = client.commandes;
    let commande = commandesClient.find(
      (commande) => commande.id == req.params.orderId
    );
    res.json({
      commande,
    });
  })
  .put((req, res) => {
    res.json({});
  })
  .delete((req, res) => {
    res.json({
      message: "commandes supprimés",
    });
  });

module.exports = router;
