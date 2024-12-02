//Ejercicio 3 sentencia while 
//Calcula el factorial de un numero 


let numero = prompt("ingresar numero ")
let factorial = 1
let i = numero

while (i>1) {
    factorial *=i;
    i--;
}
console.log(`el factorial de ${numero} es ${factorial}`);
