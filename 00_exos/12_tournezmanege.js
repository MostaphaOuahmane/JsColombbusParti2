// 1- boucle WHILE
let manege = 0;
// console.log(typeof manege, manege);
while (manege < 3) {
    manege++;
    // console.log(manege);
    document.getElementById('p1').innerHTML += 'while 1 ; c\'est le tour n° ' + manege + '<br>';
} 

// let tour1 = 0;
// console.log(typeof tour1, tour1);
// while (tour1 < 3) {
//     document.getElementById('tour1').innerHTML += 'C\'est le tour de manège numéro ' + tour1 + '<br>';
//     tour1++;
//     console.log(typeof tour1, tour1);
// }

let nbrTours1 = parseInt(prompt('WHILE / Combien de tours de manège voulez faire ? ', 'saisissez un nombre, svp'));
console.log(typeof nbrTours1, nbrTours1);

let manege2 = 0;
while (manege2 < nbrTours1) {
    manege2++;// si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
    console.info(manege2);
    document.getElementById('p2').innerHTML += 'while 1 ; c\'est le tour n° ' + manege2 + '<br>';
	// manege2++;// si j'incrémente après le bloc de code le compte démarre à 0 et s'arrête à nbrTours1 - 1
} 

for (let i = 1; i <= 10; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
        // console.info(i);
        document.getElementById('p3').innerHTML += 'for 1 ; c\'est le tour n°' + i + '<br>';
    }

let nbrTours2 = parseInt(prompt('FOR / Combien de tours à faire ?')); 
for (let i = 1; i <= nbrTours2; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
    console.info(nbrTours2);
    document.getElementById('p4').innerHTML += 'FOR /  Avec une boucle for ; c\'est le tour n°' + nbrTours2 + '<br>';
}


var w1 = 0;
    console.log(typeof w1, w1);

    while (w1 <= 15 ) {// tant que le contenu de la variable est inférieur ou égal à 15
        document.write('<p>La variable w1 = ' + w1 + ',</p>');// exécute ce bloc de code
        w1++;// contenu de la variable + 1: incrémenter
    }// la boucle stoppe dès que w1 atteint 15

	console.log(10%2);