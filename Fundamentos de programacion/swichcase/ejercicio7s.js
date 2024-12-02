//ejercicio 7 sentencia switch case 
//verifica la estacion del año a partir de un mes 

let mes = prompt("Ingresar el mes")



switch (true) {
    case mes== "junio":
        case mes =="julio":
            case mes== "agosto":
        console.log("Verano");
        break;
        case mes=="septiembre":
            case mes=="octubre":
                case mes=="noviembre":
            console.log("Otoño");
            break;
            case mes=="diciembre":
                case mes=="enero":
                    case mes=="febrero":
                console.log("Invierno");
                break;
                case mes== "marzo":
                    case mes=="abril":
                        case mes=="mayo":
                    console.log("Primavera");
                    break;
                
}