const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const employeeRoutes = require("./routes/employeeRoute");
const employees = require("./datas/employees.js");

// ci dessous, permet l'accès au req.body
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(employees.values());
  next();
});

// ROUTES
// EMPLOYEE
// GET /api/v1/employee
app.get("/employee", (req, res) => {
  res.json({
    employe: employees,
  });
});
// GET /api/v1/employee/:id
app.get("/employee/:id", (req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  res.json({
    employe,
  });
});
// PUT /api/v1/employee/:id
app.put("/employee/:id", (req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  employe.adress = req.body.adress;
  res.json({
    employe,
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/employee/:id
app.delete("/employee/:id", (req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  res.json({
    message: "employé licencié",
  });
});

// COMPTA
// GET /api/v1/compta
app.get("/compta", (req, res) => {
  res.json({
    factures: [
      { id: 1, société: "Auxel", montant: 2500 },
      { id: 2, société: "ArbreAPain", montant: 1990 },
    ],
  });
});
// GET /api/v1/compta/:id
app.get("/compta/:id", (req, res) => {
  res.json({
    factures: [{ id: 1, société: "Auxel", montant: 880 }],
  });
});
// PUT /api/v1/compta/:id
app.put("/compta/:id", (req, res) => {
  let newmontant = req.body.montant;
  res.json({
    factures: [{ id: 1, société: "Auxel", montant: newAdress }],
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/compta/:id
app.delete("/compta/:id", (req, res) => {
  res.json({
    message: "facture licencié",
  });
});

// CLIENTS
// GET /api/v1/clients
app.get("/clients", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// GET /api/v1/clients/:id
app.get("/clients/:id", (req, res) => {
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: 880 }],
  });
});
// PUT /api/v1/clients/:id
app.put("/clients/:id", (req, res) => {
  let newcommandes = req.body.commandes;
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: newAdress }],
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/clients/:id
app.delete("/clients/:id", (req, res) => {
  res.json({
    message: "clients supprimés",
  });
});
// GET /api/v1/clients
app.get("/clients/:id/commandes", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// GET /api/v1/clients/:id
app.get("/clients/:id/commandes/:id", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// PUT /api/v1/clients/:id
app.put("/clients/:id/commandes/:id", (req, res) => {
  let newcommandes = req.body.commandes;
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: newAdress }],
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/clients/:id
app.delete("/clients/:id/commandes/:id", (req, res) => {
  res.json({
    message: "clients supprimés",
  });
});

// Ultime middleware Handler error
app.use((err, req, res, next) => {
  console.log("middleware avec 4 params->error middleware");
});

app.listen(port, console.log(`le serveur est lancé sur le port ${port}`));
