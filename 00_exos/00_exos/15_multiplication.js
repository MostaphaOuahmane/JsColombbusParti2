

 var nombre1 = Number(prompt("Choisez un premier nombre "));
//  var nombre1 = parseInt(prompt("Choisez un premier nombre "));
 console.log(typeof nombre1 ,nombre1);


for (i = 1; i <= 10; i++) {

    var resultat = nombre1 * i;
    document.getElementById('exo1').innerHTML+= nombre1 +'x'+i+ '='+resultat+ '<br>';
} 

var nombre2 = parseInt(prompt("Choisez un nombre entre 2 et 9 "));
console.log(typeof nombre2 ,nombre2);


if (nombre2 >=2 && nombre2 <=9) {

    for (i = 1; i <= 10; i++) {

        var resultat = nombre2 * i;
        document.getElementById('exo2').innerHTML+= nombre2 +'x'+i+ '='+resultat+ '<br>';
    } 

}else{
    document.getElementById('exo2').innerHTML+= ' le nombre doit être compris entre 2 et 9';

}

