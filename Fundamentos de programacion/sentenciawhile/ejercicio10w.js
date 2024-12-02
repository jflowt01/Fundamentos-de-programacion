//ejercicio 10 sentecia while 
//encuentra el primer numero divisible por 7 despues del 100

let numero =Number(101) 
while (numero>100 && numero<=106) {
    if (numero%7===0)
    console.log(numero);
    numero++
}