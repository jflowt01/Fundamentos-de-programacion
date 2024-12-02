//ejercicio 5 sentencia switch case 
//verifica si una cadena es "Hola", "Adios", "Desconocido".

let cadena = prompt("ingreasar cadena")

switch (true) {
    case cadena.startsWith("Hola"):
        console.log("esta cadena es Hola");
        break;
    case cadena.startsWith("Adios"):
    console.log("esta cadena es Adios");
    break;
    case cadena.startsWith("Desconocido"):
    console.log("esta cadena es Desconocido");
    break;
    
    default:
        console.log("cadena invalida");
        break;
}