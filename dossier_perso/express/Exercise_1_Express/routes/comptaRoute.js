const express = require("express");
const factures = require("../datas/factures");

const router = express.Router();

// COMPTA
// GET / api / v1 / compta;
router.route("").get((req, res) => {
  res.json({
    factures,
  });
});
// GET /api/v1/compta/:id
router.route("/:id").get((req, res) => {
  const facture = factures.find((facture) => facture.id == req.params.id);
  res.json({
    facture,
  });
});

// // PUT /api/v1/compta/:id
router.route("/:id").put((req, res) => {
  const facture = factures.find((facture) => facture.id == req.params.id);
  facture.amount = req.body.amount;
  res.json({
    facture,
    message: "Montant modifiée",
  });
});

// // DELETE /api/v1/compta/:id
router.route("/:id").delete((req, res) => {
  const indexFactureToDelete = factures.findIndex(
    (facture) => facture.id == req.params.id
  );
  factures.splice(indexFactureToDelete, 1);
  res.json({
    message: "facture supprimée",
  });
});

module.exports = router;
