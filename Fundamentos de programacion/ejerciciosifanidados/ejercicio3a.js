//ejercicio 3 sentencia if else anidados 
//verificar si un numero es divisivle entre 2, 3 o ambos 

let numero = prompt("ingresar numero")

if (numero%2===0 && numero%3===0) {
    console.log("este numero es divisible entre ambos numeros");
    
}else if (numero%2===0){
    console.log("este numero es divisible entre 2");
    
}else if( numero%3===0){
    console.log("este numero es divisible entre 3");
    
}else{
    console.log("este numero no es divisible entre 2 y 3");
    
}