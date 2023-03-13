const employees = require("../datas/employees");

const employeModel = {
  getAll: () => {
    return employees;
  },
  getOne: (id) => {
    const employe = employees.find((employe) => employe.id == id);
    return employe;
  },
  update: (id, adress) => {
    const employe = employees.find((employe) => employe.id == id);
    employe.adress = adress;
    return employe;
  },
  delete: (id) => {
    let employe = employees.find((employe) => employe.id == id);
    console.log(employe);
    employees.splice(employe, 1);
  },
  augmentation: (id, augmentation) => {
    let employe = employees.find((employe) => employe.id == id);
    const salary = parseInt(employe.salary);
    employe.salary = salary + augmentation;
    return employe;
  },
  diminution: (id, diminution) => {
    let employe = employees.find((employe) => employe.id == id);
    const salary = parseInt(employe.salary);
    employe.salary = salary - diminution;
    return employe;
  },
};

module.exports = employeModel;
