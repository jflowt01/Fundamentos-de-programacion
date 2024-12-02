//ejercicio 6 sentencia switch case 
//Determina si una cadena es "Si"o "No"

let cadena = prompt("ingresar cadena")

switch (true) {
    case cadena.startsWith("Si"):
        console.log("esta cadena es Si");
        break;
        case cadena.startsWith("No"):
            console.log("esta cadena es No");
            break;
    default:
        console.log("esta cadena es invalida");
        
        break;
}