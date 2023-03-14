const express = require("express");
const comptaController = require("../controllers/comptaController.js");

const router = express.Router();

// COMPTA
// GET / api / v1 / compta;
router.route("").get(comptaController.getAll);
router.route("").post(comptaController.createOne);
// GET /api/v1/compta/:id
router.route("/:id").get(comptaController.getOne);
// // PUT /api/v1/compta/:id
router.route("/:id").put(comptaController.update);
// // DELETE /api/v1/compta/:id
router.route("/:id").delete(comptaController.delete);

module.exports = router;
