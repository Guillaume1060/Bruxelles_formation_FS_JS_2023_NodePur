const factures = require("../datas/factures");

const factureModel = {
  getAll: () => {
    return factures;
  },

  getOne: (id) => {
    return factures.find((facture) => facture.id == id);
  },

  update: (id) => {
    const facture = factures.find((facture) => facture.id == id);
    return facture;
  },
  createOne: (facture) => {
    factures.push(facture);
    // TODO revoir la méthod filter qui ne fonctionne pas bien
    return factures.filter((facture) => facture.paid === false);
  },

  delete: (id) => {
    let facture = factures.find((facture) => facture.id == id);
    factures.splice(facture, 1);
  },
};

module.exports = factureModel;
