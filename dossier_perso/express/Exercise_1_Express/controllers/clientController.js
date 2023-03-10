const clientService = require("../services/clientService.js");

const clientController = {
  getAll: (req, res) => {
    let clients = clientService.getAll();
    res.json({
      clients,
    });
  },
  getOne: (req, res) => {
    let id = parseInt(req.params.id);
    let client = clientService.getOne(id);
    res.json({
      client,
    });
  },
  update: (req, res) => {
    let id = parseInt(req.params.id);
    let newFirstName = req.body.first_name;
    let client = clientService.update(id, newFirstName);
    res.json({
      client,
      message: "first_name modifiée",
    });
  },
  delete: (req, res) => {
    let id = parseInt(req.params.id);
    clientService.delete(id);
    res.json({
      message: "client supprimé",
    });
  },
};

// TODO j'ai fini controller->service->modèle uniquement pour la route client
// Finir les trois autres routes.
// faut-il envoyer le req.body au model pour le maj de la DB ?

module.exports = clientController;
