const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const employeeRoutes = require("./routes/employeeRoute");
const employees = require("./datas/employees.js");
const clients = require("./datas/clients");
const factures = require("./datas/factures");

// ci dessous, permet l'accès au req.body
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
  // req.requestTime = new Date().toISOString();

  next();
});

// ROUTES
// EMPLOYEE
// GET /api/v1/employee
app.get("/api/v1/employee", (req, res) => {
  res.json({
    employees,
  });
});
// GET /api/v1/employee/:id
app.get("/api/v1/employee/:id", (req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  res.json({
    employe,
  });
});
// POST /api/v1/employee/:id/augmentation
app.post("/api/v1/employee/:id/augmentation", (req, res) => {
  const montantAugmentation = Number(req.body.augmentation);
  const employeAugmente = employees.find(
    (employe) => employe.id == req.params.id
  );
  const salary = parseInt(employeAugmente.salary);
  let newSalary = salary + montantAugmentation;
  employeAugmente.salary = newSalary;
  res.json({
    employeAugmente,
    Message: `Vous avez obtenu une augmentation de ${montantAugmentation} euros`,
  });
});
// PUT /api/v1/employee/:id
app.put("/api/v1/employee/:id", (req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  employe.adress = req.body.adress;
  res.json({
    employe,
    message: "Adresse modifiée",
  });
});
// DELETE /api/v1/employee/:id
app.delete("/api/v1/employee/:id", (req, res) => {
  const indexEmployeeToFire = employees.findIndex(
    (employe) => employe.id == req.params.id
  );
  employees.splice(indexEmployeeToFire, 1);
  res.json({
    message: "employé licencié",
  });
});

// COMPTA
// GET /api/v1/compta
app.get("/api/v1/compta", (req, res) => {
  res.json({
    factures,
  });
});
// GET /api/v1/compta/:id
app.get("/api/v1/compta/:id", (req, res) => {
  const facture = factures.find((facture) => facture.id == req.params.id);
  res.json({
    facture,
  });
});
// PUT /api/v1/compta/:id
app.put("/api/v1/compta/:id", (req, res) => {
  const facture = factures.find((facture) => facture.id == req.params.id);
  facture.amount = req.body.amount;
  res.json({
    facture,
    message: "Montant modifiée",
  });
});

// DELETE /api/v1/compta/:id
app.delete("/api/v1/compta/:id", (req, res) => {
  const indexFactureToDelete = factures.findIndex(
    (facture) => facture.id == req.params.id
  );
  factures.splice(indexFactureToDelete, 1);
  res.json({
    message: "facture supprimée",
  });
});

// CLIENTS
// GET /api/v1/clients
app.get("/api/v1/clients", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// GET /api/v1/clients/:id
app.get("/api/v1/clients/:id", (req, res) => {
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: 880 }],
  });
});
// PUT /api/v1/clients/:id
app.put("/api/v1/clients/:id", (req, res) => {
  let newcommandes = req.body.commandes;
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: newAdress }],
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/clients/:id
app.delete("/api/v1/clients/:id", (req, res) => {
  res.json({
    message: "clients supprimés",
  });
});
// GET /api/v1/clients
app.get("/api/v1/clients/:id/commandes", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// GET /api/v1/clients/:id
app.get("/api/v1/clients/:id/commandes/:id", (req, res) => {
  res.json({
    factures: [
      { id: 1, nomClient: "Auxel", commandes: 2500 },
      { id: 2, nomClient: "ArbreAPain", commandes: 1990 },
    ],
  });
});
// PUT /api/v1/clients/:id
app.put("/api/v1/clients/:id/commandes/:id", (req, res) => {
  let newcommandes = req.body.commandes;
  res.json({
    factures: [{ id: 1, nomClient: "Auxel", commandes: newAdress }],
    message: "Adresse modifié",
  });
});
// DELETE /api/v1/clients/:id
app.delete("/api/v1/clients/:id/commandes/:id", (req, res) => {
  res.json({
    message: "clients supprimés",
  });
});

// Ultime middleware Handler error
app.use((err, req, res, next) => {
  console.log("middleware avec 4 params->error middleware");
});

app.listen(port, console.log(`le serveur est lancé sur le port ${port}`));
