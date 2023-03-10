const employees = require("../datas/employees");

const employeeController = {
  getAll: (req, res) => {
    res.json({
      employees,
      message: "ok",
    });
  },
  getOne: (req, res) => {
    const employe = employees.find((employe) => employe.id == req.params.id);
    res.json({
      employe,
    });
  },
  update: (req, res) => {
    const employe = employees.find((employe) => employe.id == req.params.id);
    employe.adress = req.body.adress;
    res.json({
      employe,
      message: "Adresse modifiée",
    });
  },
  delete: (req, res) => {
    const indexEmployeeToFire = employees.findIndex(
      (employe) => employe.id == req.params.id
    );
    employees.splice(indexEmployeeToFire, 1);
    res.json({
      message: "employé licencié",
    });
  },
  augmentation: (req, res) => {
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
  },
  diminution: (req, res) => {
    const montantDiminution = Number(req.body.diminution);
    const employeDiminue = employees.find(
      (employe) => employe.id == req.params.id
    );
    const salary = parseInt(employeDiminue.salary);
    let newSalary = salary - montantDiminution;
    employeDiminue.salary = newSalary;
    res.json({
      employeDiminue,
      Message: `Vous avez obtenu une baisse de ${montantDiminution} euros`,
    });
  },
};

module.exports = employeeController;
