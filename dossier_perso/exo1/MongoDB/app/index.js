const mongoose = require("mongoose");
const clientRepository = require("./repositories/client.repository");
const ui = require("./ui/ui");

const Client = require("./models/client.model");

main().catch((e) => console.log(e));

async function main() {
  const db = await mongoose.connect("mongodb://172.26.21.232/formation");

  const actionSelected = await ui.displayActions();

  switch (actionSelected) {
    case "1":
      const name = await ui.question("Entrer le nom");
      const client = await clientRepository.findOneByName(name);
      console.log(client);
      break;
    case "2":
      const locality = await ui.question("Entrer la localite");
      const clients = await clientRepository.findAllByLocalite(locality);
      clients.forEach((c) => console.log(c));
      break;
    case "3":
      const nameNewClient = await ui.question("Quel est son nom client?");
      const adresseNewClient = await ui.question("Quelle est son adresse?");
      const localityNewClient = await ui.question("Quel est sa ville?");

      await clientRepository.save(
        new Client({
          NOM: nameNewClient,
          ADRESSE: adresseNewClient,
          LOCALITE: localityNewClient,
        })
      );
      break;
    // case "4":
    //   const clientsNamur = await clientRepository.agregationClientsNamur();
    //   // const clients = await clientRepository.findAllByLocalite(locality);
    //   console.log(clientsNamur);
    //   break;
  }

  mongoose.disconnect();
}
