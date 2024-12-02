//ejercicio 8 sentencia do while
//imprime los primeros 10 numeros de la serie Fibonacci
let a = 0; 
let b = 1; 
let contador = 0; 

do {
    console.log(a); 
    let siguiente = a + b; 
    a = b; 
    b = siguiente; 
    contador++; 
} while (contador < 10);

