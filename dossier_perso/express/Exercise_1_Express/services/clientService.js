const clientModel = require("../models/clientModel.js");

const clientService = {
  getAll: () => {
    let allClient = clientModel.getAll();
    return allClient;
  },

  getOne: (id) => {
    let oneClient = clientModel.getOne(id);
    return oneClient;
  },

  update: (id, newFirstName) => {
    let updateClient = clientModel.update(id);
    updateClient.first_name = newFirstName;
    return updateClient;
  },

  delete: (id) => {
    let deleteClient = clientModel.delete(id);
    return deleteClient;
  },
};

module.exports = clientService;
