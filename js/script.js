// ESERCIZIO 1
//  Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

 var array = ['Giulia', 'Claudio', 'Giovanni' ,'Porthos' , 'Penny', 'Shiro', 'Luca'];
 var num1 = parseInt(prompt('inserisci numero min-1, max-' + array.length));
 var num2 = parseInt(prompt('inserisci numero grande max-' + array.length));

 console.log(compreso(array, num1, num2)); 

 function compreso(ar, a, b){
    var newAr = []; 
    for (var i = a - 1; i < b; i++){
       newAr.push(ar[i]);
    }
    return newAr;
 }


// ESERCIZIO 2
//  Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

 var par1 = prompt('inserisci la prima parola');
 var par2 = prompt('inserisci la seconda parola');


 var result = lunghezze(par1, par2);
 console.log(result);

 function lunghezze(a, b){
 if (a.length === b.length){
     var risultato = a + ' ' + b;
 }else if(a.length > b.length){
     var risultato = a;
 }else{
     var risultato = b;
 }

 return risultato
 }
    

// ESERCIZIO 3
//Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 var lettere = ['a', 'b', 'c'];

 var numeri = [1, 2, 3];

 var array = [];

  var fondi = fondere( array, lettere, numeri);
  console.log(array);

  function fondere(x, a, b){
     if(a.length == b.length){
         var lungtot = a.length
     }
     for(var i = 0; i < lungtot; i++){
         x.push(a[i]);
         x.push(b[i]);
     }
 }


// VERSIONE SENZA FUNZIONE

// if( lettere.length == numeri.length){

//     var lunghezzaLista = lettere.length;

//     for(var i= 0; i< lunghezzaLista; i++){
//         array.push(lettere[i]);
//         array.push(numeri[i]);
//     }
// }

// console.log(array);



// ESERCIZIO 4
// Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parola = prompt('inserisci una parola');

console.log(capitalizzato(parola));

function capitalizzato(stringa){
    var maiuscola = stringa[0];
    maiuscola = maiuscola.toUpperCase();
    stringa = stringa.substring(1).toLowerCase();
    stringa = maiuscola + stringa;
    return stringa;
}

