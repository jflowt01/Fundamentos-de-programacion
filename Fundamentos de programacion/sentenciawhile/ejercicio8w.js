//ejercicio 8 sentencia while 
// imprime los primeros 10 numeros de la serie Fibonacci


let a = 0; 
let b = 1; 
let contador = 0; 

while (contador < 10) {
    console.log(a); 
    let suma = a + b; 
    a = b; 
    b = suma; 
    contador++; 
}

