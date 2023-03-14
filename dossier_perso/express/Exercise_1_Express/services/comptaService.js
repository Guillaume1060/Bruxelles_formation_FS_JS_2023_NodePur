const facturetModel = require("../models/comptaModel");

const factureService = {
  getAll: () => {
    let allFactures = facturetModel.getAll();
    return allFactures;
  },

  getOne: (id) => {
    let facture = facturetModel.getOne(id);
    if (facture != undefined) return facture;
    else
      return {
        errorMessage: `La facture numéro ${id} n'existe pas, ❤️ sur vous!`,
      };
  },

  createOne: (facture) => {
    return facturetModel.createOne(facture);
  },

  update: (id, update) => {
    if (update.amount !== undefined || update.date_echeance !== undefined) {
      return facturetModel.update(id, update);
    }
    if (update.company !== undefined || update.paid !== undefined) {
      return {
        errorMessage: `le nom de la compagnie et/ou la validité de facture n'est pas modifiable`,
      };
    }
  },

  delete: (id) => {
    let facturePayee = facturetModel.delete(id);
    return facturePayee;
  },
};

module.exports = factureService;
