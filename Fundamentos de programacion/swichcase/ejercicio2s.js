//ejercicio 2 sentencia switch case
//verifica si una letra es vocal solo minusculas 

let letra = prompt("ingresar letra")
switch (letra) {
    case "a":
        console.log("esta letra es vocal a");
        break;

        case "e":
        console.log("esta letra es vocal e");
        break;

        case "i":
            console.log("esta letra es vocal i");
        break; 
        
        case"o":
        console.log("esta letra es vocal o");
        break;

        case "u":
            console.log("esta letra es vocal u");
            break;
        

    default:
        console.log("esta letra es consonante");
        break;
}