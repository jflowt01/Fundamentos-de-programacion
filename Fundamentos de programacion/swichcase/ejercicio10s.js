//ejercicio 10 sentencia switch case
//Determia el color del semaforo(rojo, amarillo, verde)

let color = prompt("ingresar color")

switch (true) {
    case color =="rojo":
        console.log("rojo");
        break;
        case color == "amarillo":
        console.log("amarillo");
        break;
        case color == "verde":
        console.log("verde");
        break;
default:
        console.log("opcion invalida");
        break;
}