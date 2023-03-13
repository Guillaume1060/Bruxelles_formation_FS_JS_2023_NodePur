// const factures = require("../datas/factures");
const factureService = require("../services/comptaService");

const comptaController = {
  getAll: (req, res) => {
    let factures = factureService.getAll();
    res.json({
      factures,
    });
  },
  getOne: (req, res, next) => {
    let id = req.params.id;
    let facture = factureService.getOne(id);
    if (facture.id != undefined) {
      res.json(facture);
    } else if (facture.errorMessage != undefined) {
      res.locals.message = facture;
      next();
    } else {
      throw new Error("Something went wrong");
    }
  },
  createOne: (req, res, next) => {
    let facturesToPaid = factureService.createOne(req.body);
    console.log(facturesToPaid);
    res.json({
      message: "facture enregistrée",
      facturesToPaid,
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
