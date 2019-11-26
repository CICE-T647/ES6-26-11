let employee = {
  name: "Ricardo",
  lastname: "Rodriguez",
  salary: 60000,
  //   getSalary: function() {
  //     console.log(`${this.name} ${this.lastname} gana ${this.salary} euros`);
  //   },
  // En este caso no podemos utilizar arrow function, pero podemos dejalo simplificado
  getSalary() {
    console.log(`${this.name} ${this.lastname} gana ${this.salary} euros`);
  }
};

employee.getSalary();

let name = employee.name;
let lastname = employee.lastname;
let salary = employee.salary;

let { name, lastname, salary } = employee;

// Ejemplo de deconstruccion de
function getSalary({ name, lastname, salary }) {
  console.log(name, lastname, salary);
}

getSalary(employee);

const getEmployee = (name, lastname, salary) => {
  let employee = { name, lastname, salary };
  return employee;
};
