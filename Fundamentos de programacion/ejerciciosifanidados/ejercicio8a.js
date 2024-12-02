//ejercicico 8 sentencia if anidados 
// verificar si un numero es multiplo de 2, 3 o ninguno

let numero = prompt("ingrasa un numero")

if (numero%2===0 && numero%3===0) {
    console.log("este numero es multiplo de 2 y de 3");
    
}else if (numero%2===0){
    console.log("este numero es multiplo de 2");
    
}else if (numero%3===0){
    console.log("este numero es multiplo de 3");
    
}else {
    console.log("este numero no es multiplo de ninguno");
    
}