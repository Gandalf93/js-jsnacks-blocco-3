// 1.) Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// 2.) Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
// 3.)  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 4.) Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.



// 1)

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