//ejercicio 6 ejercicios combinados
//Haz un programa que simule un cajero automatico, permitiendo varias transacciones con switch y repitiendo 
//el proceso hasta que el usuario decida salir.

let saldo = 1000000; // Saldo inicial
let continuar = true; // Variable para controlar el bucle

while (continuar) {
    // Menú de opciones
    let opcion = prompt(
        "Bienvenido a Banco Bienestar\n" +
        "1. Consultar saldo\n" +
        "2. Retirar dinero\n" +
        "3. Depositar dinero\n" +
        "4. Desea donar a fundacion\n"+
        "5. Salir\n" +
        "Selecciona una opción:"
    );

    switch (opcion) {
        case '1':
            alert("Tu saldo actual es: $" + saldo);
            break;
        case '2':
            let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
            if (retiro > saldo) {
                alert("No tienes suficiente saldo.");
            } else if (retiro <= 0) {
                alert("La cantidad a retirar debe ser mayor que cero.");
            } else {
                saldo -= retiro;
                alert("Has retirado: $" + retiro + "\nTu nuevo saldo es: $" + saldo);
            }
            break;
        case '3':
            let deposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
            if (deposito <= 0) {
                alert("La cantidad a depositar debe ser mayor que cero.");
            } else {
                saldo += deposito;
                alert("Has depositado: $" + deposito + "\nTu nuevo saldo es: $" + saldo);
            }
            break;
            case '4':
                let donacion = parseFloat(prompt("¿Cuánto deseas donar?"));
                if (donacion <= 0) {
                    alert("La cantidad a donar debe ser mayor que cero.");
                } else {
                    saldo -= donacion;
                    alert("Has donacion: $" + donacion + "\nTu nuevo saldo es: $" + saldo);
                }  
                break;  
        case '5':
            continuar = false; 
            alert("Gracias por usar el Cajero Automático. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
    }
}

