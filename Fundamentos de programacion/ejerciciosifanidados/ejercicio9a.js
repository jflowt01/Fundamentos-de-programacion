//ejercicio 9 sentencia if anidados 
//verifica el estado de una bateria (bajo, medio, alto) 

let bateria = prompt("ingresa porcentaje de bateria")


if (bateria<=20 ) {
    console.log("bateria baja");
    
}else if (bateria>21 && bateria<80) {
    console.log("bateria media");
    
}else if (bateria>=80 && bateria<=100) {
    console.log("bateria alta");
    
}