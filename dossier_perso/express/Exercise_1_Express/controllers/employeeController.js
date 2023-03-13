// const employees = require("../datas/employees");
const employeeService = require("../services/employeeService.js");

const employeeController = {
  getAll: (req, res) => {
    let employees = employeeService.getAll();
    res.json({
      employees,
    });
  },
  getOne: (req, res) => {
    let employe = employeeService.getOne(req.params.id);
    res.json({
      employe,
    });
  },
  update: (req, res) => {
    let updatedEmployee = employeeService.update(
      req.params.id,
      req.body.adress
    );
    res.json({
      updatedEmployee,
      message: "Adresse modifiée",
    });
  },
  delete: (req, res) => {
    let id = parseInt(req.params.id);
    employeeService.delete(id);
    res.json({
      message: "employé supprimé",
    });
  },
  augmentation: (req, res) => {
    let id = parseInt(req.params.id);
    const montantAugmentation = Number(req.body.augmentation);
    let employeAugmente = employeeService.augmentation(id, montantAugmentation);
    res.json({
      employeAugmente,
      Message: `Vous avez obtenu une augmentation de ${montantAugmentation} euros`,
    });
  },
  diminution: (req, res) => {
    let id = parseInt(req.params.id);
    const montantDiminution = Number(req.body.diminution);
    let employeDiminue = employeeService.diminution(id, montantDiminution);
    res.json({
      employeDiminue,
      Message: `Vous avez obtenu une diminution de ${montantDiminution} euros`,
    });
  },
};

module.exports = employeeController;
