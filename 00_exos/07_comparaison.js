// alert('coucou');

// si je mets parseInt je suis certain que l'on aura un number
// parse = analyser INT = integer(entier)

let nbr1 = parseInt(prompt('Saississez un 1er nombre.'));
let nbr2 = parseInt(prompt('Saississez un 1er nombre.'));

// si je rentre une information qui n'est pas un nombre 
// le console.log nous NaN not a number
console.log(typeof nbr1, nbr1);
console.log(typeof nbr2, nbr2);

//faisons le if else if qui compare deux nombres en sup, inférieur ou égal
// if (nbr1 < nbr2) {
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est plus petit que votre 2nd : ' + nbr2;
// } else if (nbr1 > nbr2) {
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est plus grand que votre 2nd : ' + nbr2;
// } else {
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est égal à votre 2nd : ' + nbr2;
// }

// isNaN() nous dit "ce n'est pas un nombre"
// !isNan() nous dit "c'est bien un nombre"

// on doit vérifier d'abord que ce sont bien des nombres qui sont saisi par l'utilisateur dans un if else
// si ce sont des nombres on fera le test de comparaison 
// sinon on dira ce ne sont pas des nombres

if ( (!isNaN(nbr1)) && (!isNaN(nbr2)) ) {
    // (!isNaN(nbr1)) && (!isNaN(nbr2)) cela vérfie "ce sont bien des nombres, tous les deux"
    if (nbr1 < nbr2) {
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est plus petit que votre 2nd : ' + nbr2;
    } else if (nbr1 > nbr2) {
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est plus grand que votre 2nd : ' + nbr2;
    } else {
        document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nbr1 + ' est égal à votre 2nd : ' + nbr2;
    }
} else {
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
}