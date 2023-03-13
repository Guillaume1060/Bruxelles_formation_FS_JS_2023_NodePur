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

app.all("*", (req, res, next) => {
  if (res.locals.message != undefined) {
    responseError = {
      Message: res.locals.message,
      ErrorCode: 404,
    };
  }

  res.status(404).json(responseError);
});

app.use((error, req, res, next) => {
  console.log("Error URL : ", req.url);
  console.log("Error Message : " + error);
  res.status(500).json({ Error: req.url, Message: "" + error, ErrorCode: 500 });
});

app.listen(port, console.log(`le serveur est lancé sur le port ${port}`));
