const factures = require("../datas/factures");

const factureModel = {
  getAll: () => {
    return factures;
  },
  getOne: (id) => {
    return factures.find((facture) => facture.id == id);
  },
  createOne: (facture) => {
    let id = factures.length + 1;
    facture.id = id;
    factures.push(facture);
    return factures.filter((facture) => facture.paid == false);
  },
  update: (id, update) => {
    const facture = factures.find((facture) => facture.id == id);
    if (update.amount !== undefined) {
      facture.amount = update.amount;
    }
    if (update.date_echeance !== undefined) {
      facture.date_echeance = update.date_echeance;
    }
    return facture;
  },
  delete: (id) => {
    let facturePayee = factures.find((facture) => facture.id == id);
    if (facturePayee == undefined) throw new Error("la facture n existe pas");
    if (facturePayee.paid == true) {
      throw new Error("la facture a déjà été payé");
    } else {
      facturePayee.paid = true;
      return facturePayee;
    }
  },
};

module.exports = factureModel;
