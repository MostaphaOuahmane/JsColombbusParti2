// fonctions 

// coucou();


// random()
console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();// ici on exécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random


//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;


// création de fonctions

//1er ex. multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}

// console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nd exemple une multiplication
// mot clef + nom de la fonction()
function multiplier(nbr1,nbr2) {// les paramètres de la fonction
    // return (nbr1 * nbr2);// la fonction simplement
    return ('Multiplication : ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2));// bloc de code qui renvoie une string avec le calcul
}

// ici on "appelle" la fonction
// un appel de fonction
console.log(multiplier(2,56));// la fonction avec les arguments
document.getElementById('p4').innerHTML = multiplier(56,9);// idem

// EXO faites une fonction pour soustraire un nombre d'un autre 
// soustraction
function soustraire(nbr1,nbr2) {
    // return (nbr1 - nbr2);
    return ('Soustraction : ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
console.log(soustraire(10,54));
document.getElementById('p5').innerHTML = soustraire(56,9);

// division
function diviser(nbr1,nbr2) {
    // return (nbr1 / nbr2);
    return ('Division : ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
console.log(diviser(10,5235684));
document.getElementById('p6').innerHTML = diviser(10,54);

// addition
function additionner(nbr1,nbr2) {
    // return (nbr1 + nbr2);
    return ('Additionner : ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
console.log(additionner(10,54));
document.getElementById('p7').innerHTML = additionner(56,9);

// modulo
function leModulo(nbr1,nbr2) {
    // return (nbr1 % nbr2);
    return ('Le modulo (le reste de la division) : ' + nbr1 + ' / ' + nbr2 + ' = ' +  (nbr1 / nbr2) +  ' le modulo est  ' + (nbr1 % nbr2));
}
console.log(leModulo(10,54));
document.getElementById('p8').innerHTML = leModulo(10,54);