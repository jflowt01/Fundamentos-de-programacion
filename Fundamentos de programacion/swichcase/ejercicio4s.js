//ejercicio 4 sentencia switch case
//clasifica una nota en letras (A,B,C,D,E,F)

let nota =  prompt("ingresar nota");

switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("A");
        break;
    case (nota >= 80 && nota < 90):
        console.log("B");
        break;
    case (nota >= 70 && nota < 80):
        console.log("C");
        break;
    case (nota >= 60 && nota < 70):
        console.log("D");
        break;
    case (nota < 60 && nota >= 0):
        console.log("F");
        break;

        default:
            console.log("nota no valida ");
            
}



