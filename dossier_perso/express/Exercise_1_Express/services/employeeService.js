const employeModel = require("../models/employeModel");

const employeeService = {
  getAll: () => {
    let allEmployees = employeModel.getAll();
    return allEmployees;
  },

  getOne: (id) => {
    let oneEmploye = employeModel.getOne(id);
    return oneEmploye;
  },
  update: (id, adress) => {
    let employeUpdated = employeModel.update(id, adress);
    return employeUpdated;
  },
  delete: (id) => {
    let deleteEmploye = employeModel.delete(id);
    return deleteEmploye;
  },
  augmentation: (id, augmentation) => {
    let employeAugmente = employeModel.augmentation(id, augmentation);
    return employeAugmente;
  },
  diminution: (id, diminution) => {
    let employeDiminue = employeModel.diminution(id, diminution);
    return employeDiminue;
  },
};

module.exports = employeeService;
