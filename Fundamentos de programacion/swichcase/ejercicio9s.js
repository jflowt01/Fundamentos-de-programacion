//ejercicio 9 sentencia switch case 
//verifica el tipo de usuario (admin, editor, usuario)

let usuarioIngresado = prompt("ingresar nombre")


switch (true) {
    case usuarioIngresado =="administrador":
        console.log("Es administrador");
        break;
        case usuarioIngresado == "editor":
        console.log("Es editor");
        break;
        case usuarioIngresado == "usuario":
            console.log("Es usuario");
            break;
    default:
        console.log("Opcion no valida");
        break;
}