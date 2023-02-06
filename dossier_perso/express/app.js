const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/*
GET /users
    POST /users
    GET /users/42
    PUT /users/42
    DELETE /users/42  
    */

// ci dessous, permet l'accès au req.body
app.use(express.json());

// Exemple de middleware
app.get("/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "clemence" },
      { id: 2, name: "nicolas" },
    ],
  });
});

// Ultime URL pour les 404
app.all("*", (req, res) => {
  res.json({
    error: "404:ressources not found",
  });
});

// Ultime middleware Handler error
app.use((err, req, res, next) => {
  console.log("middleware avec 4 params->error middleware");
});

app.listen(port, console.log(`le serveur est lancé sur le port ${port}`));
