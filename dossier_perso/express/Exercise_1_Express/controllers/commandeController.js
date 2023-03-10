const clients = require("../datas/clients");

const commandeController = {
  getAll: (req, res) => {
    const client = clients.find((client) => client.id == req.params.id);
    res.json({
      commandes: client.commandes,
    });
  },
  getOne: (req, res) => {
    let client = clients.find((client) => client.id == req.params.id);
    let commandesClient = client.commandes;
    let commande = commandesClient.find(
      (commande) => commande.id == req.params.orderId
    );
    res.json({
      commande,
    });
  },
  update: (req, res) => {
    res.json({});
  },
  delete: (req, res) => {
    res.json({
      message: "commandes supprimés",
    });
  },
};

module.exports = commandeController;
