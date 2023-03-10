const express = require("express");
const employees = require("../datas/employees");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// EMPLOYEE
// GET /api/v1/employee
router.route("").get(employeeController.getAll);
router.route("/:id").get(employeeController.getOne);
router.route("/:id/augmentation").put(employeeController.augmentation);
router.route("/:id/diminution").put(employeeController.diminution);
router.route("/:id").put(employeeController.update);
router.route("/:id").delete(employeeController.delete);

module.exports = router;
