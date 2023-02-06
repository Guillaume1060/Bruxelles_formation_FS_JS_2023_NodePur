const express = require("express");

// EMPLOYEE
// GET /api/v1/employee
app.get("/", (req, res) => {
  res.json({
    employe: [
      { id: 1, name: "Claude", adresse: "55 avenue du roi" },
      { id: 2, name: "Patrick", adresse: "24 rue Victor hugo" },
    ],
  });
});
// GET /api/v1/employee/:id
app.get("/:id", (req, res) => {
  res.json({
    employe: [{ id: 1, name: "Claude", adresse: "55 avenue du roi" }],
  });
});
// PUT /api/v1/employee/:id
app.put("/:id", (req, res) => {
  res.json({
    employe: [{ id: 1, name: "Claude", adresse: "55 avenue du roi" }],
  });
});
// DELETE /api/v1/employee/:id
app.delete("/:id", (req, res) => {
  res.json({
    employe: [{ id: 1, name: "Claude", adresse: "55 avenue du roi" }],
  });
});
