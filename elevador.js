var pisoActual = 1;
const primerPiso = 2;
const ultimoPiso = 20;
var direccion = prompt ("Subes o bajas?")
var pisoSeleccionado
pisoSeleccionado = prompt ("a que piso vas?")

for (pisoActual; pisoActual <= ultimoPiso; pisoActual++) {
	console.log("Estas en el piso " + pisoActual);
	if (pisoActual == pisoSeleccionado) {
        alert ("llegaste");
	}
}
