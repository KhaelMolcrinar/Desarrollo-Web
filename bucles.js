
// bucle for
// sabemos cuantas veces queremos ejecutarlo

// const x = 2;

// para i = 0; mientras i < x; volvemos a ejecutar con i +1

// for (let i = 0; i < x; i++) {
//     console.log(i);
// }


const list = ['jose', 'adrian', 'luis', 'pedro'];

for (let i = 0; i < list.length; i++) {
    if (list[i] === 'luis') {
        console.log('Yes I hate ' + list[i]);
    } else {
        console.log('No I dont hate ' + list[i]);
    }
}


// for (let i = 0; i < x; i = i + 2) {
//     console.log(i)
// }

// bucle while
// se usa para cuando no sabemos las veces q lo vamos a ejecutar

// let i = 6;

// mientras el valor de x sea menos que el de i ejecutamos
// while (x < i) {
//     console.log(x);
//     i--;
// }