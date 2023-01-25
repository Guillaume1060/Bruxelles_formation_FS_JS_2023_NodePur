import * as mongoose from "mongoose";
// const Client = require("../app/models/client.model");
// const mongoose = require("mongoose");

main()
  .then((_) => console.log("FIN"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://172.26.21.232/formation");

  const ClientsSchema = new mongoose.Schema({
    CLIENT_ID: String,
    NOM: String,
    ADRESSE: String,
    LOCALITE: String,
    CAT: String,
    COMPTE: Number,
  });

  const Client = mongoose.model("Clients", ClientsSchema);
  const data = Client.aggregate([
    {
      $match: { LOCALITE: "Namur" },
      $group: { numClientsNamur: { $num: 1 } },
    },
  ]);

  console.log(data);
}

// Client.aggregate([
//   {
//     $count: { $sum: 1 },
//     $group: { LOCALITE },
//   },
// ]);

// Client.aggregate([
//   {
//     $or: [{ $cond: { $lte: ["$COMPTE", 0] } }, { $match: { $sum: 1 } }],
//     $group: { LOCALITE },
//   },
// ]);

//   console.log(exo1);
// Client.find({ LOCALITE: "Toulouse" }, "NOM ADRESSE", (err, clients) => {
//   clients.forEach((client) => console.log(client));
// });

// //  $eq, $gt(e), $lt(e)
// function DisplayInfo() {
//   const requete_1 = Client.find({ COMPTE: { $gt: 0 } }, {});
// }

// DisplayInfo();

// Client.findAll({}, { CAT: false }, (err, clients) => {
//   clients.forEach((client) => console.log(client));

// });

//   Client.find({}, { COMMANDES }, (err, clients) => {
//     clients.forEach((client) => console.log(client));
//   });
