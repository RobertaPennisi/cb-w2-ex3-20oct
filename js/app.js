//                                                               0       1      2      3       4
let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia').split(',');
let arrAge = [32, 21, 47, 12, 78];

// con questo creo un array dalla stringa data dal prompt
// posso aggiungere split alla fine del prompt => let strName = str.split(','); -> str diventa array ugualmente


// con unshift aggiungo Giacomo che è il risultato della parentesi -> dentro la parentesi con splice sostituisco a Giacomo Marta
str.unshift(str.splice(3 , 1, 'Marta')[0]);
// aggiungo in coda Franco e Valentina
str.push('Franco', 'Valentina');
//con la stessa procedura cambio le posizioni dei numeri
arrAge.unshift(arrAge.splice(3 , 1, 6)[0]);
arrAge.push(54, 32);

console.log([str, arrAge])