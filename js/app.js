//             0     1        2         3       4
const arr = ["Dog","Cat","Goldfish","Monkey","Panda"];

// questo aggiunge elementi alla coda dell'array
arr.push('Ignazio','Marco','Stefania')

//splice(start, count, el, el, ...) 
//in questo caso 2 elementi vengono tolti dalla posizione 2 e vengono sostituiti dai valori a seguire
let result = arr.splice(2, 2, 'Ignazio', 434, ['altro', 'array']);

//splice(start, count, el, el, ...) 
//in questo caso vengono estratti 2 elementi dalla posizione 2
let result = arr.splice(2, 2);


console.log(arr);
console.log(result);