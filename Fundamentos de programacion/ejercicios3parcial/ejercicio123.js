//Arreglo o array: estructuras de datos
//hay 2 formas de hacer el arreglo en js 
//la primera usando corchetes 
let numeros = [1,2,3,4,5,6];
//             0,1,2,3,4,5    indices
//usando el array() vector
let frutas = new Array("manzana", "bananas", "Naranjas");
//el mas comun en js es usar los corchetes []

//acceder a los elementos de un arreglo 
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);
//Modificar los elementos de un arreglo

let fruta = ["manzana", "bananas", "Naranjas", "peras", "mangos"];
console.log(fruta);
fruta[1]= "uva";
console.log(fruta);
//Propiedad length de arreglos 
console.log(fruta.length);
//Agregar un nuevo elemento en el array:
//push(): Agregar un elemento final del arreglo 
fruta.push("Sandia");
fruta.push("Melon");
fruta.push("Kiwi");
console.log(fruta);
//Eliminar el ultimo elemento de arreglo: pop()
fruta.pop();
fruta.pop();
console.log(fruta);
//Eliminar el primer elemento del arreglo 
//fruta[0]=fruta.pop()
//console.log(fruta);
fruta.shift()
console.log(fruta);
//Agrega un elemento al principio del arreglo 
fruta.unshift("Guayaba");
console.log(fruta);
//agreagar o eliminar un elemento en un posicion especifica
//splice(): Usado para agregar elementos en cualquier posicion de un arreglo 
fruta.splice(1,0,"litchi")
console.log(fruta);
//splice(): Usado para eliminar un elemento en cualquier posicion de un arreglo
fruta.splice(4,1);
console.log(fruta);

//Recorrer arreglos usando la sentencia for 
for(let i=0; i<fruta.length;i++){
    console.log(fruta[i]);
    
}
console.log("fin del ejemplo del for");

//Metodo moderno para recorrer arreglos forEach(): Ejecuta una funcion 
//para cada elemento de un arreglo 
fruta.forEach(function(f){
    console.log(f);
    
});
console.log("Fin del ejemplo de forEach");

//Metodo alterno moderno de recorrer un arreglo 
//map(): Crea un nuevo arreglo con los resultados de aplicar una funcion a cada elemento 
let fruta2 = fruta.map(function(f){
    return f + "2";
})
console.log(fruta2);
console.log("Fin del ejemplo map");


//Arreglos multidimensionales: es un arreglo que contiene otros arreglos como elementos
//Matrices: porque son utiles para representar datos en tablas o matrices 

//Regularmente se hbla de arreglos bidimensionales 

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
//Acceder al elemento en la fila 0, columna 1
console.log(matriz[0][1]); //Salida del dato 2

//Acceder al elemento en la fila 2, columna 2
console.log(matriz[2][2]); //Salida del dato 9
console.log("Fin de mostrar elemntos");


//Dos indices el de las filas y las columnas 

//Recorrer un arreglo multimencional 

//Ciclo para las filas 

for(let i=0; i<matriz.length;i++){
     //ciclo para las columnas  
     for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
        
     }
    
}

//Modificar elementos en un arreglo bidimensional 
//cambiar el elemento 6
matriz[1][2]= 10;
console.log(matriz);

//Arreglos multidimensionales con mas de 2 dimensiones 
let cubo = [


    [//primer nivel 
    [1,2,3],  //fila 0
    [4,5,6],  //fila 1
    [7,8,9]   //fila 2
    ],
    [//segundo nivel (Matriz 2)
    [10,11,12],  //fila 0
    [13,14,15],  //fila 1
    [16,17,18]   //fila 2


    ]
]
console.log(cubo[1][1][2]);
console.log("fin de mostrar elementos");

//Recorrer un arreglo de 3 dimensiones 

for(let i= 0; i<matriz.length;i++){  
    for (let j = 0; j < matriz[i].length; j++) { //primer nivel de matriz
        for(let k= 0; k<cubo[i][j].length;k++) // segundo nivel de filas 
       console.log(cubo[i][j][k]); //tercer nivel de columnas 
       
    }
   
}

//Usos comunes de arreglos multidimensionales 
/*
Son utiles en varias situaciones, mas que nada cuando se requiere representar datos en formas de tablas o
matrices o cualquier estructuta que tenga mas de una dimension tabla de datos:
Matrices matematicas 
Juegos de tableros 
Matrices 3D en graficos computacionales 
*/

//Ejemplo en ejercicio 

//Crear un arreglo que contenga 5 nombres y luego podamos imprimir 
//cada nombre en la consola 


//crear un arreglo de 5 nombre

let alumnos = ["Axel","Samuel","Sindy","Jair","Itiel"]


//Recorrido de arreglo de alumnos e imprimir cada nombre 
alumnos.forEach(function(alumno){
console.log(alumno);

});

// Dado un arreglo de numeros, calcula el promedio de esos numeros
//crear arreglo 
let numero =[1,2,3,4,5,6,7,8,9,10]
//inicializa la variable suma 
let suma = 0;
//recorrido del arreglo para la suma de numeros 
for (let i = 0; i < numero.length; i++) {
    suma += numero[i]
    
}

 //calcular el promedio diciendo la suma entre el numero de elementos 
 let promedio = suma / numero.length;

 console.log(`El promedio es: ${promedio}`);
 
 //Dado un arreglo invertir el orden de los elementos e imprimir 
 let letras = [1,2,3,4,5,7,8,9,10]

 for (let i = [10]; i < letras.length; i--) {
    console.log(letras);
    
    
 }
 
 
