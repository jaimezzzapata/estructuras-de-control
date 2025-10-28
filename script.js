/* 
Condicionales 
    1 - Simple
    2 - Compuesto
    3 - Anidado
    4 - Multiple
    5 - Operador ternario
*/

/* Simple */
if (true) {
  console.log("Esto es verdad");
}

/* Compuesto */
if (false) {
  console.log("Esto es verdad");
} else {
  console.log("Esto es falso");
}

/* Multiple */
switch (1) {
  case 1:
    break;
  default:
    break;
}

/* Anidado */
if (true) {
} else if (true) {
} else if (true) {
} else if (true) {
} else {
}

/* Ternario */
// let variable = condicion ? true : false

/* 
Ciclos
    1 - For
    2 - While
    3 - Do-While
*/

let opcion = prompt(
  "Ingrese una opción: \n1 - Calcular bruto\n2 - Calcular deducciones\n3 - Calcular auxilio de transporte\n4 - Calcular salario neto",
);

// console.log(typeof opcion)
// console.log(typeof 1)
// isNaN

let valorHora;
let cantidadHoras;
switch (opcion) {
  case "1":
    valorHora = prompt("Ingrese el valor de la hora: ");
    cantidadHoras = prompt("Ingrese la cantidad de horas: ");
    if (isNaN(valorHora) || isNaN(cantidadHoras)) {
      console.log("El valor ingresado no corresponde a un número válido");
    } else {
      console.log("El salario bruto es: " + valorHora * cantidadHoras);
    }
    break;
  case "2":
    valorHora = prompt("Ingrese el valor de la hora: ");
    cantidadHoras = prompt("Ingrese la cantidad de horas: ");
    if (isNaN(valorHora) || isNaN(cantidadHoras)) {
      console.log("El valor ingresado no corresponde a un número válido");
    } else {
      console.log("Las deducciones son: " + valorHora * cantidadHoras * 0.08);
    }
    break;
  case "3":
    valorHora = prompt("Ingrese el valor de la hora: ");
    cantidadHoras = prompt("Ingrese la cantidad de horas: ");
    if (isNaN(valorHora) || isNaN(cantidadHoras)) {
      console.log("El valor ingresado no corresponde a un número válido");
    } else if (valorHora * cantidadHoras < 1400000) {
      console.log("Tiene derecho a auxilio de transporte");
    } else {
      console.log("No tiene derecho a auxilio de transporte");
    }
    break;
  case "4":
    valorHora = prompt("Ingrese el valor de la hora: ");
    cantidadHoras = prompt("Ingrese la cantidad de horas: ");
    if (isNaN(valorHora) || isNaN(cantidadHoras)) {
      console.log("El valor ingresado no corresponde a un número válido");
    } else if (valorHora * cantidadHoras < 1400000) {
      console.log("El salario neto es: " + (valorHora * cantidadHoras) - (valorHora * cantidadHoras * 0.08) + 200000);
    } else {
      console.log("El salario neto es: " + (valorHora * cantidadHoras) - (valorHora * cantidadHoras * 0.08));
    }
    break;
  default:
    break;
}
