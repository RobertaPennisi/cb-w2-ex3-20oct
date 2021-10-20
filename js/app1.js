
//                                                               0       1      2      3       4
let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia');
let arrAge = [32, 21, 47, 12, 78];

// con questo creo un array dalla stringa data dal prompt
let strName = str.split(',');

// con questo isolo Giacomo dall'array appena creato
let strName1 = strName.slice(3, 4);

// con questo isolo Giorgia dall'array appena creato
let strName2 = strName.slice(4);

// con questo escludo Giacomo e Giorgia dall'array iniziale cambiando la loro posizione con l'uso delle variabili che ho creato
strName.splice(3 , 2, 'Marta', strName2.join(), 'Franco', 'Valentina')

// con questo aggiungo Giacomo in testa all'array
strName.unshift(strName1.join())

// con la stessa procedura usata in precedenza isolo gli ultimi due numeri che devono cambiare posizione
let arrAge1 = arrAge.slice(3,4);
let arrAge2 = arrAge.slice(4);

// con la stessa procedura usata in precedenza escludo 12 e 78 dall'array arrAge cambiando la loro posizione con le nuove variabii
arrAge.splice(3, 2, 6, parseInt(arrAge2.join()) , 54, 32)

// con questo aggiungo 12 in testa all'array
arrAge.unshift(parseInt(arrAge1.join()))

//array finale da mostrare in output

let output = [strName, arrAge]

//output --> strName è il primo array da mostrare
//console.log(strName)
//console.log(arrAge)
console.log(output)
