class Employee {
  constructor(name, lastname, salary) {
    this.name = name;
    this.lastname = lastname;
    this.salary = salary;
  }

  getSalary() {
    console.log(this.salary);
  }
  getName() {
    console.log(this.name);
  }
  getLastname() {
    console.log(this.lastname);
  }
}

// Instanciamos la clase Employee
const employee1 = new Employee("Ricardo", "Rodriguez", 100000);

employee1.getSalary();

// Creamos una clase Boss que hereda sus
class Boss extends Employee {
  constructor(name, lastname, charge) {
    super(name, lastname);

    this.charge = charge;
  }

  toFire() {
    console.log("You are fired!!!!!!!");
  }
}

const boss1 = new Boss("Roberto", "López");

boss1.getName();

module.exports = Employee;
