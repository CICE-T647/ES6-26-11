function helloWorld() {
  console.log("hello world");
  retrun;
}

// Arrow function
const helloWorld2 = () => {
  return "hello world";
};
helloWorld2();

// Arrow function en una sola linea (solo para funciones cuyo contenido sea una linea de ejecución)
const helloWorld3 = () => "hello world";

helloWorld();

// Es posible quitar los parentesis cuando la función recibe un único parámetro.
// Hay quien prefiere ponerlos para que se vea más rápido que se trata de una arrow function.
const duplicateNumber = a => a * 2;

duplicateNumber(5);

module.exports = helloWorld;
