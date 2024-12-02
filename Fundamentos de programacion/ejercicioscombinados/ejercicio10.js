//ejercicio 10 ejercicios combinados 
//Desarrolla un programa que determine si un número ingresado es perfecto (un número es perfecto si es
//igual a la suma de sus divisores propios) usando un ciclo for.

let numero = parseInt(prompt("Ingresa un número para verificar si es perfecto:"));
let sumaDivisores = 0;
for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}
if (sumaDivisores === numero) {
    console.log((`${numero} es un número perfecto.`));
} else {
    console.log((`${numero} no es un número perfecto.`));
}
