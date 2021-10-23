// alert('coucou');

// exo bac
// parseFloat()

let moyenne = parseFloat(prompt('Quel est la moyenne du BAC'));
console.log(typeof moyenne, moyenne);

if (!isNaN(moyenne) ) {
            if (moyenne >= 0 && moyenne < 10) {
            document.getElementById('p1').innerHTML = 'Tu es recalé !';
            } else if (moyenne >= 10 && moyenne < 12 ) {
                document.getElementById('p1').innerHTML = 'Tu passes, sans mention !';
            } else if (moyenne >= 12 && moyenne <= 20 ) {
                document.getElementById('p1').innerHTML = 'Reçu avec mention ! :) ' ;
            } else {
                document.getElementById('p1').innerHTML = 'La moyenne doit être comprise entre 0 et 20 ! :) '; 
            }
    } else {
        document.getElementById('p1').innerHTML = 'Vous n\avez pas saisi de nombre !';
    }