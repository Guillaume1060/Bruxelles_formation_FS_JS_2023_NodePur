const Client = require("../models/client.model");

async function findAll(select = {}, project = {}) {
  return Client.find(select, project);
}
async function findOne(select = {}, project = {}) {
  return Client.findOne(select, project);
}

async function findOneByName(name, project = {}) {
  return findOne({ NOM: { $regex: name, $options: "i" } }, project);
}
async function findAllByLocalite(localite, project = {}) {
  return findAll({ LOCALITE: { $regex: localite, $options: "i" } }, project);
}
async function save(client) {
  try {
    return await client.save();
  } catch (e) {
    console.log(e.message);
  }

  async function agregationClientsNamur() {
    return Client.aggregate([
      {
        $match: { LOCALITE: "Namur" },
        $group: { numClientsNamur: { $num: 1 } },
      },
    ]);
  }

  //   async function commandeUniqueParLocalite() {
  //     Client.aggregate([
  //       {
  //         $count: { $sum: 1 },
  //         $group: { LOCALITE },
  //       },
  //     ]);
  //   }
}

// async function delete (client) {
//     try {
//         return await client.
//     } catch (e) {
//         console.log(e.message);

//     }
// }

module.exports = {
  findOneByName,
  findAllByLocalite,
  save,
  agregationClientsNamur,
};
