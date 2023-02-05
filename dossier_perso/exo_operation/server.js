// 1.
// micro serveur, repondant uniquement des données brut style json
// une seul route ! répondre a des opération mathématique passée en QUERY STRING !
// il devra y avoir les deux nombre et l'opération demandée : localhost:3000/math?nb1=42&nb2=150&op=x
// cette dernière option op, pourra être écrite en lettre, en toute lettre, en symbole,
//vous devrez déterminer lequel est-ce et renvoyer l'opération total sur chaine de caratère ainsi que la réponse à ce calcule
// comme suit {   operation : 42 + 150, reponse : 192 }
// 2.
// pour ceux qui aurait fini je vous demande d'inventer un fonction de cryptage des nombre, elle ne sera connue que de vous !
// par exemple 42 deviendra 78451259874
// la réponse renvoyée a l'utilisateur devra également du coup comprendre operation en cryptée aussi genre avec le nom cryptOperation : 45132184651213 + 1654612311849, reponseDecrypt : 192
// un bon exos de gestion de variable, de retour et de stratégie d'attaque face un probleme
// j'ai du, créer ce genre de web service pour un client donc je pense qu'il peut vous être utile de le faire également, prenez le temps de bien partir de 0 c'est le plus important en réalité !
// je suis disponilbe par écris au plus possible et en fonction de mon état, je vous répondrai le plus rapidement possible pour ce fiare et pour ne pas déranger les personne qui travailles , je vous demande de me contacter par message privé sur discord

const express = require("express");
const app = express();
const url = require("url");

const server = app.listen(3000, () => {
  console.log("App running on port");
});

function router(req, res) {
  let urlParse = url.parse(req.url, true);
  let queryString = urlParse.query;
  let urlParams = urlParse.pathname.split("/");
  let methodHttp = req.method;
  // console.log(urlParse);
  // console.log(queryString);
  // console.log(urlParams);
  console.log(methodHttp);
  res.end();
}

app.use("/calcul", (req, res) => {
  // console.log(req.url);
  router(req, res);
});
