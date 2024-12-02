//ejercicio6 sentencia if anidados 
//verifica si un numero esta entre 0 y 50, entre 51 y 100, o mas de 100

let numero = prompt ("ingresar numero");

if (numero>=0 && numero<=50) {
    console.log("este numero esta entre 0 y 50");
    
}else if (numero>=51 && numero<=100) {
    console.log("este numero esta entre 51 y 100");
    
}else if (numero>100) {
    console.log("este numero es mayor a 100");
    
}


