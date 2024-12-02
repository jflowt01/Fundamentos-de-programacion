//ejercicio 9 ejercicios combinados 
//Crea un programa que solicite una contraseña al usuario y permita tres intentos. Si falla, muestra un
//mensaje de bloqueo, usando do-while.

const contraseñaCorrecta = "miContraseña123"; 
let intentos = 0; 
let contraseñaIngresada; 

do {
    contraseñaIngresada = prompt("Ingresa la contraseña (tienes 3 intentos):");
    intentos++; 
    if (contraseñaIngresada === contraseñaCorrecta) {
        console.log(("¡Contraseña correcta! Acceso concedido."));
        break; 
    } else {
        console.log(("Contraseña incorrecta. Intenta de nuevo."));
    }
} while (intentos < 5);

if (intentos === 5 && contraseñaIngresada !== contraseñaCorrecta) {
    console.log(("Has fallado 5 veces. Acceso bloqueado."));
}
