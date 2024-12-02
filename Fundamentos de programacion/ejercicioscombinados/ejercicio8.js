//ejercicio 8 ejercicios combinados 
//Realiza un programa que pida 5 numeros y los ordene de mayor a menor usando un ciclo for y if.

let numeros = parseInt(prompt("ingresar numeros"+[]));

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    numeros.push(numero); 
}
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {

            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
console.log(("Números ordenados de mayor a menor: " + numeros.join(", ")));
