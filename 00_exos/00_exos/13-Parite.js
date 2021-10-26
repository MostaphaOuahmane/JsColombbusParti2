console.log('*********** DEMO FOR ********');

for (var i = 1; i<=10; i++) {
    if (i % 2 === 0) {
       console.log(i + ' est pair.');
    }
}
// exo 1
console.log('********* EXO 1 **********'); 
for (var i = 1; i<=10; i++) {
    if (i % 2 === 0) {
       console.log(i + ' est pair.');
    } else {
        console.log(i + ' est impair');
    }
}

// exo 2 FOR
 document.write('<p>*************** EXO 2 ***************</p>');

 var nbrUtilisateur1 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
 console.log(typeof nbrUtilisateur1, nbrUtilisateur1);

 var nbrUtilisteurMax = (nbrUtilisateur1 + 10);
 console.log(typeof nbrUtilisteurMax, nbrUtilisteurMax);

 for (var i = nbrUtilisateur1; i<=nbrUtilisteurMax; i++) {
    if (i % 2 === 0) {
       document.write('<p class="stabilo"> ' + i + ' est pair.</p>');
    } else {
        document.write('<p> ' + i + ' est impair.</p>');
    }
}

// exo 3 WHILE
document.write('<p>*************** EXO 3 ***************</p>');