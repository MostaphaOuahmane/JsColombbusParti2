
// var solde = 5000 ,
//     solde1 = 100 ,
//     solde2 = 75 ,
//      solde3 = 25,
//      solde4 = 2134,
//      solde5 = 700;

// document.getElementById("prix").innerHTML = solde;
// document.getElementById("prix1").innerHTML = solde / solde1; 
// document.getElementById("prix2").innerHTML = solde - solde2; 
// document.getElementById("prix3").innerHTML = solde * solde3; 
// document.getElementById("prix4").innerHTML = solde - solde4;  
// document.getElementById("prix5").innerHTML = solde + solde5;  
//        console.log( solde ,solde4 ,solde5, solde1 , solde2, solde3);


function MonAge ( ) {
    "use strict";
    var Age =prompt("Entre votre age  " );

    return (Age *365) ;
}
document.getElementById("Age").innerHTML= " votre age par jour est "+MonAge();
