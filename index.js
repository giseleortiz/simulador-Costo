const readlineSync = require('readline-sync');

function calcularCosto() {
  console.log("Simulador de Costo");

  const cantidad = readlineSync.questionInt('Ingrese la cantidad: ');
  const precioUnitario = readlineSync.questionFloat('Ingrese el precio unitario: ');
  const costoAdicional = readlineSync.questionFloat('Ingrese el costo adicional (0 si no hay): ');

  const costoTotal = (cantidad * precioUnitario) + costoAdicional;

  console.log(`\nEl costo total es: $${costoTotal.toFixed(2)}`);
}

calcularCosto();
