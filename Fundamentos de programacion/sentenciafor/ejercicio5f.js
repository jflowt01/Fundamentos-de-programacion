//ejercicio 5
// calcula el factorial de un numero 

let numero = prompt("ingresar numero"); 
let factorial = 1; 

if (numero < 0) {
    console.log("opcion invalida");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i; 
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}
