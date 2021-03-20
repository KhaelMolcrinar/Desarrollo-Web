// Funciones

// puras
// no mutan ningun valor

// Given the same input, will always return the same output.
// Produces no side effects.

// void y las q devuelven algo

function vancia() {
    // hace cosas
}

function noVacia(cosas) {
    return cosas + 1;
}

const x = noVacia(5);

console.log(x)


// creacion de funciones

function functionName(arguments) {

}

const functionName = function(arguments) {
};

//  funcion sin scope

function padre() {
    const pepe;
    const functionName = () => {};
}

// funcion autoinvocada

(function pepe(x) {
    return x;
})()

// 

(() => {

})()