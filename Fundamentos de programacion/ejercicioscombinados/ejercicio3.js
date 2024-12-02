//ejercicio 3 ejercicios combinados 
//Escribe un programa que determine si un numeros es primo utilizando el ciclo while
// luego imprime todos los numeros primos entre el 1 y el numero dado

let numero = 20; 
let contador = 2; 
let primos = []; 
while (contador <= numero) {
    let esPrimo = true; 
    let divisor = 2; 

    while (divisor <= contador / 2) {
        esPrimo *= (contador % divisor !== 0); 
        divisor++;
    }
    esPrimo && contador > 1 && primos.push(contador);
    contador++; 
}
console.log("Números primos entre 1 y " + numero + ": " + primos.join(", "));
