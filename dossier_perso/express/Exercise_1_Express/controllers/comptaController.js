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
  createOne: (req, res) => {
    let facturesToPaid = factureService.createOne(req.body);
    let montantRestantAPayer = facturesToPaid
      .map((facture) => facture.amount.replace("€", ""))
      .map((amount) => parseInt(amount))
      .reduce((acc, cur) => acc + cur, 0);
    montantRestantAPayer = new Intl.NumberFormat("be-BE", {
      style: "currency",
      currency: "EUR",
    }).format(montantRestantAPayer);

    res.json({
      message: "facture enregistrée",
      montantRestantAPayer,
      facturesToPaid,
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;
    let update = req.body;
    let facture = factureService.update(id, update);
    if (facture.errorMessage != undefined) {
      res.locals.message = facture;
      next();
    } else {
      res.json({
        facture,
        message: "facture modifiée",
      });
    }
  },

  delete: (req, res) => {
    let id = req.params.id;
    let facturePayee = factureService.delete(id);

    res.json({
      message: "facture payée",
      facturePayee,
    });
  },
};

module.exports = comptaController;
