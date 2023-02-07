const express = require("express");
const employees = require("../datas/employees");

const router = express.Router();

// EMPLOYEE
// GET /api/v1/employee
router.route("").get((req, res) => {
  res.json({
    employees,
    message: "ok",
  });
});

// // GET /api/v1/employee/:id
router.route("/:id").get((req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  res.json({
    employe,
  });
});

// // POST /api/v1/employee/:id/augmentation
router.route("/:id/augmentation").put((req, res) => {
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

// // PUT /api/v1/employee/:id
router.route("/:id").put((req, res) => {
  const employe = employees.find((employe) => employe.id == req.params.id);
  employe.adress = req.body.adress;
  res.json({
    employe,
    message: "Adresse modifiée",
  });
});

// // DELETE /api/v1/employee/:id
router.route("/:id").delete((req, res) => {
  const indexEmployeeToFire = employees.findIndex(
    (employe) => employe.id == req.params.id
  );
  employees.splice(indexEmployeeToFire, 1);
  res.json({
    message: "employé licencié",
  });
});

module.exports = router;
