const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const employeeRoute = require("./routes/employeeRoute");
const comptaRoute = require("./routes/comptaRoute");
const clientRoute = require("./routes/clientRoute");

// ci dessous, permet l'accès au req.body
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
  // req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
// app.use(router);
app.use("/api/v1/employee", employeeRoute);
app.use("/api/v1/compta", comptaRoute);
app.use("/api/v1/clients", clientRoute);

app.listen(port, console.log(`le serveur est lancé sur le port ${port}`));
