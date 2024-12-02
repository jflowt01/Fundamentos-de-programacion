//ejercicio 4 ejercicios combinados
//Realice un programa que determine el signo zodiacal basado en el dia y mes de nacimiento del usuario 
//utilizando if else anidados 


let diaNacimiento = parseInt(prompt("ingresar dia de nacimiento")); 
let mesNacimiento = parseInt(prompt("Ingresar mes de nacimiento")); 
let signo;

if (diaNacimiento < 1 || (mesNacimiento === 2 && diaNacimiento > 29) || // valua el mes de febrero si es mayor a 29 da error 
    (mesNacimiento === 4 || mesNacimiento === 6 || mesNacimiento === 9 || mesNacimiento === 11) && diaNacimiento > 30 ||//valua el mes de abril, junio, septiembre y noviembre que son los meses que tiene 30 dias por lo tanto si ponemos un numero mayor a 30 lo tomara como invalido 
    diaNacimiento > 31) {//si el dia de nacimiento es mayor a 31 entonces en los demas meses no valuados en la anterior condicion sera invalido 
    signo = "Fecha inválida";
} else {
    if (mesNacimiento === 1) {
    if (diaNacimiento <= 19) {
        if(diaNacimiento>0)   
        signo = "Capricornio";
    } else {
        signo = "Acuario";
    }
} else if (mesNacimiento === 2) {
    if (diaNacimiento <= 18) {
        signo = "Acuario";
    } else {
        signo = "Piscis";
    }
} else if (mesNacimiento === 3) {
    if (diaNacimiento <= 20) {
        signo = "Piscis";
    } else {
        signo = "Aries";
    }
} else if (mesNacimiento === 4) {
    if (diaNacimiento <= 19) {
        signo = "Aries";
    } else {
        signo = "Tauro";
    }
} else if (mesNacimiento === 5) {
    if (diaNacimiento <= 20) {
        signo = "Tauro";
    } else {
        signo = "Géminis";
    }
} else if (mesNacimiento === 6) {
    if (diaNacimiento <= 20) {
        signo = "Géminis";
    } else {
        signo = "Cáncer";
    }
} else if (mesNacimiento === 7) {
    if (diaNacimiento <= 22) {
        signo = "Cáncer";
    } else {
        signo = "Leo";
    }
} else if (mesNacimiento === 8) {
    if (diaNacimiento <= 22) {
        signo = "Leo";
    } else {
        signo = "Virgo";
    }
} else if (mesNacimiento === 9) {
    if (diaNacimiento <= 22) {
        signo = "Virgo";
    } else {
        signo = "Libra";
    }
} else if (mesNacimiento === 10) {
    if (diaNacimiento <= 22) {
        signo = "Libra";
    } else {
        signo = "Escorpio";
    }
} else if (mesNacimiento === 11) {
    if (diaNacimiento <= 21) {
        signo = "Escorpio";
    } else {
        signo = "Sagitario";
    }
} else if (mesNacimiento === 12) {
    if (diaNacimiento <= 21) {
        signo = "Sagitario";
    } else {
        signo = "Capricornio";
    }
} else {
}
 }

console.log("Tu signo zodiacal es: " + signo);



