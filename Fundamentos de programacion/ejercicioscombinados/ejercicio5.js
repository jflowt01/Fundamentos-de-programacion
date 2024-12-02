//ejercicio 5 ejercicios combinados
//Escribe un programa que permita ingresar una serie de calificaciones y determine la cantidad de 
// aprobados y reprobados usando while y if-else.

let aprobados = 0; 
let reprobados = 0; 
let calificacion; 

while (true) {
    calificacion = prompt("Ingresa una calificación (o escribe 'salir' para terminar):");
    if (calificacion.toLowerCase() === 'salir') {
        break; 
    }
    calificacion = parseFloat(calificacion);
    if (isNaN(calificacion)) {
        alert("Por favor, ingresa una calificación válida.");
        continue;
    }
    if (calificacion >= 7) {
        aprobados++; 
    } else {
        reprobados++;
    }
}
alert("Cantidad de aprobados: " + aprobados + "\nCantidad de reprobados: " + reprobados); // \n sirve para poner espacio entre los caracteres 
