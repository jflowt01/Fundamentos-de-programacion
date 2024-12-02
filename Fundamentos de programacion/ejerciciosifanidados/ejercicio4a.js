//ejercicio 4 sentencia if else anidados
//verifica el estado del clima (frio, templado o caliente)

let clima = prompt ("ingresa grados ")

if (clima>22) {
    console.log("este clima es caliente");
    
}else if(clima>12 && clima <=22){
    console.log("este clima es templado");
    
}else if (clima<10){
    console.log("este clima es frio");
    
}