//ejercicio 10 sentencia do while
//Encuentra el primer numero divisible por 9 despues de 50

let contador = 51

do {
    if (contador%9===0)
        console.log(contador);
        contador++
} while (contador>50 && contador<=55);