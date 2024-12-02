//ejercicio 7 ejercicios combinados 
//implementa un programa que imprima los multiplos de 3, 5 y 7 usando un for. Si un numero es multiplo
// de varios indicalo

for (let i = 1; i <= 100; i++) {
    let notificacion = `${i} es múltiplo de: `; 
    let esMultiplo = false; 
    if (i % 3 === 0) {
        notificacion += "3 "; 
        esMultiplo = true;
    }
    if (i % 5 === 0) {
        notificacion += "5 "; 
        esMultiplo = true;
    }
    if (i % 7 === 0) {
        notificacion += "7 "; 
        esMultiplo = true;
    }

    
    if (esMultiplo) {
        console.log(notificacion.trim());
    }
}
