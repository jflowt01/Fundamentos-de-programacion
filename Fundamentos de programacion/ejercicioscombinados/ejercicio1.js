// ejercicio 1 ejercicios combinados
//  Realiza un programa que solicite al usuario su edad y dependiendo de su respuesta, indique si puede votar
//Luego, usa un ciclo for para imprimir los años que le faltan hasta la edad de retiro (65 años).

let edad = prompt("ingresar edad")

if (edad>=18) {
    console.log("Este usuario puede votar");
    for (let i = edad; i<=65; i++) {
        console.log(`Años para retirarse`+ i);
        
        
    }    
}else{
    console.log("este usuario no puede votar");
    for (let i = edad; i<=65; i++) {
        console.log(`Años para retirarse`+ i);
        
        
    }
}



