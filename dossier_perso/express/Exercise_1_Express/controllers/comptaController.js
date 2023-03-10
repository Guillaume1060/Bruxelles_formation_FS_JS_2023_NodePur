const factures = require("../datas/factures");

const comptaController = {
  getAll: (req, res) => {
    res.json({
      factures,
    });
  },
  getOne: (req, res) => {
    const facture = factures.find((facture) => facture.id == req.params.id);
    res.json({
      facture,
    });
  },
  update: (req, res) => {
    const facture = factures.find((facture) => facture.id == req.params.id);
    facture.amount = req.body.amount;
    res.json({
      facture,
      message: "Montant modifiée",
    });
  },

  delete: (req, res) => {
    const indexFactureToDelete = factures.findIndex(
      (facture) => facture.id == req.params.id
    );
    factures.splice(indexFactureToDelete, 1);
    res.json({
      message: "facture supprimée",
    });
  },
};

module.exports = comptaController;
