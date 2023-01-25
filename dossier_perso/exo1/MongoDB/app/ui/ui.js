const readline = require("readline/promises");

async function displayActions() {
  console.log("Menu");
  console.log("----------------");
  console.log("1. FindOneByName");
  console.log("2. FindAllByLocality");
  console.log("3. AddClient");
  console.log("4. ClientNamurois");

  const anwser = await question("Entrez votre choix: ");

  return anwser;
}

async function DisplayAadClient() {
  console.log("Quel est le nom du client");
  const anwser = await question("Entrez votre choix: ");

  return anwser;
}

async function question(question) {
  const rl = readline.createInterface(process.stdin, process.stdout);

  const answer = await rl.question(`${question}: `);

  rl.close();

  return answer;
}

module.exports = {
  displayActions,
  question,
};
