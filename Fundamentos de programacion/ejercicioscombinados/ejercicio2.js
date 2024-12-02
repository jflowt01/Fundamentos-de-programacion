//ejercicio 2 ejercicios combinados
//Crea un programa que calcule el total a pagar en un restaurante. Elige el tipo de cliente (normal, VIP,
//miembro) usando switch y aplica un descuento en base a eso.

let precioTotal = parseFloat(prompt("ingresar cuenta a pagar"));
let tipoCliente= prompt("ingresar tipo de cliente(normal, vip, miembro)").toLowerCase();

function total1(precioTotal, tipoCliente) {
    let descuento;

switch (tipoCliente) {
     case "normal":
        descuento = 0
        console.log("pago completo");
         break;
          case "vip":
            descuento = 0.15
              console.log("VIP= Descuento del 15%");
                  break;
                    case "miembro": 
                      descuento = 0.10
                        console.log("Miembro= Descuento del 10%");
                          break;
                           default:
                             console.log("tipo de cliente no valido");
                               break;
        
}

let totalApagar= precioTotal-(precioTotal * descuento)
console.log(totalApagar);
 totalApagar;
}
let total = total1(precioTotal, tipoCliente);

