// crea una funcion que reciva 2 valores y devuelva verdadero si el primero es mayor que el segundo

function isGreaterThan(a, b) {
    return a > b;
}

// crea una funcion que intercambie 2 posiciones de un array

function changeArrayPositions(arr, pos1, pos2) {
    let aux;

    if (arr.length - 1 < (pos1 || pos2)) {
        return 'Alguna posicion no existe en el array proporcionado';
    }

    aux = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = aux;

    return arr;
}


// crea una funcion que dado un array de numeros me devuelva el mayor

function getMaxValue(arr) {
    return Math.max(...arr);
}

function getMaxValueJose(arr) {
    let max = arr[0];

    for(let i = 0; i < arr.length - 1; i++) {
        if (isGreaterThan(arr[i + 1], max)) {
            max = arr[i];
        }
    }

    return max;
}

// crea una funcion que dado un array de numeros me devuelva el menor

function getMinValue(arr) {
    return Math.min(...arr);
}

function getMinValueJose(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (!isGreaterThan(arr[i + 1], min)) {
            min = arr[i];
        }
    }

    return min;
}

// crea una funcion que dado un array de numeros me devuelva la media

function getMiddle(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// crea una funcion que dado un array de numeros, lo ordene en orden ascendente



// crea una funcion que dado un array de numeros, lo ordene en orden descendente



// crea una funcion que dado un array de numeros me devuelva el mediana

const arrayA = [
    {
        nombre: 'adrian',
        edad: 30,
        sexo: 'hombre'
    }
]

// Dado un array de objetos de este tipo
// crea una funcion que dada una clave(ex: nombre) y un valor(ex: adrian) devuelva el array filtrado con aquellos valores que cumplan la condicion.

const arrayB = [
    {
        nombre: 'adrian',
        edad: 30,
        sexo: 'hombre',
        mascotas: [
            {
                nombre: 'Happy',
                raza: 'Gato'
            }
        ]
    }
]

// Dado un array de objetos de este tipo
// crea una funcion que devuelva el nombre de aquellas personas que tengan al menos algun gato.

// crea una funcion que devuelva el nombre de aquellas personas que tengan al menos algun gato y sean hombres.


// #######################

console.log('### Ejercicio 1 ###');
console.log('5 es mayor que 3 ? ' + isGreaterThan(5, 3));
console.log();
console.log('### Ejercicio 2 ###');
console.log('Intercambia las posiciones 3, 2 del array [1, 2, 3, 4] -> ' + changeArrayPositions([1,2,3,4], 3, 2));
console.log();
console.log('### Ejercicio 3 ###');
console.log('El valor mas alto del array es ' + getMaxValueJose([12, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log();
console.log('### Ejercicio 4 ###');
console.log('El valor mas bajo del array es ' + getMinValueJose([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log();
console.log('### Ejercicio 5 ###');
console.log('El valor medio del array es ' + getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log();
console.log('### Ejercicio 6 ###');
console.log('Orden ascendente ' + orderAscJose([5,2,8,6]));
console.log();
console.log('### Ejercicio 7 ###');
console.log('Orden descendente ' + orderDscJose2([5, 2, 8, 6]));
console.log();
