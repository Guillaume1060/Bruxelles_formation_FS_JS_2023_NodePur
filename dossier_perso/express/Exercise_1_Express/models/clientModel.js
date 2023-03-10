const clients = require("../datas/clients");

const clientModel = {
  getAll: () => {
    return clients;
  },

  getOne: (id) => {
    let client = clients.find((client) => client.id == id);
    return client;
  },

  update: (id) => {
    const client = clients.find((client) => client.id == id);
    return client;
  },

  delete: (id) => {
    let client = clients.find((client) => client.id == id);
    clients.splice(client, 1);
  },
};

module.exports = clientModel;
