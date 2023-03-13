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
    return (facturesToPaid = facturetModel.createOne(facture));
  },

  update: (id, newFirstName) => {
    let updateClient = facturetModel.update(id);
    updateClient.first_name = newFirstName;
    return updateClient;
  },

  delete: (id) => {
    let deleteClient = facturetModel.delete(id);
    return deleteClient;
  },
};

module.exports = factureService;
