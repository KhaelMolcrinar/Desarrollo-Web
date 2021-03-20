// Esta instruccion lanza un texto por consola
console.log('Esto es un texto por consola');

// Variable global con effecto en toda el archivo o aplicacion
var variableName = 'valor';
// Variable con efecto reducico a donde se definio
let variableName2 = 'valor';
// Igual que let pero no se puede modificar
const variableName3 = 'valor';


// Tipos de datos
let var1 = 'variable de tipo texto';
let var2 = 1; // variable de tipo numerico
let var3 = 2.0; // variable de tipo double
let var4 = true; // variable de tipo boolean
let var5 = [1, 2, 3]; // Variable de tipo Array
let var6 = {
    prop1: 2,
    prop2: 'text'
}; // Variable de tipo object

// Ejecicios basicos

// Definicion
let x;
// asignacion
x = 5;

// Crea una variable de tipo texto con el valor => estoy aprendiendo
let varx = 'estoy aprendiendo';
// Crea una variable de tipo numerico con el valor => 999
let vary = 999;
// Crea una variable de tipo double con el valor => 2.0 aprendiendo
let varz = 2.0;
// Crea una variable de tipo boleano con el valor => false
let varv = false;
// Crea una variable de tipo array con los valores => 5, hola (texto), verdadero (boleano)
let varw = [5, 'hola', true];
// Crea una variable de tipo object con claves nombre = jose y apellidos = soriano
let varu ={
    nombre: 'jose',
    apellidos: 'soriano'
};

// Reasigna las variables segun quieras
varx = 'adri me enseña';
// modificar un valor en array
varw[0] = 1;



// Dadas las variables a y b intercambia sus valores

let a = 5;
let b = 6;

let c = [a, b];
a = c[1];
b = c[0];



console.log('valor de a = ' + a + ' ----- valor de b = ' + b );
