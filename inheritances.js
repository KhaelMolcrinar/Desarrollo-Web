// Arrays

const list = ['Adri', 'jose', 'pepe'];

console.log(list.length)

// list.forEach(element => {}) -> Equivalente al for
// list.filter(element => consition) -> Filtra un array
//  ...

const byExtactName = (name) => name !== 'jose';

console.log(list.filter(byExtactName))

//  Objects
const obj = {
    data: [1, 2, 3],
    names: ['Adri', 'jose']
}

// keys del objeto -> data y names
Object.keys(obj) 

// Values del objeto -> [1, 2, 3] y ['adri', 'jose]
Object.values(obj)