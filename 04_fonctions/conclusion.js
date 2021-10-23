// coucou();

//page conclusion fonctions
// on crée une fonction anonyme
// function () {
//     alert('Alerte exécutée dans une fonction anonyme');
// }

// comment l'appeler ? je la passe en variable 

// let monAlerte = function () {
//     alert('Alerte exécutée dans une fonction anonyme');
// }

// monAlerte();

// auto-invocation d'une fonction anonyme

// function () {
//     alert('Alerte dans une seconde fonction');
// }


// fonction anonyme auto-invoquée
// (function () {
//     alert('Alerte dans une seconde fonction');
// })();

let para1 = document.getElementById('p1');// en variable je passe le p id p1

para1.addEventListener('click', function (){// sur cette variable j'ajoute un écouteur d'évènement avec, au clique, une fonction anonyme qui s'éxécute à la demande 
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
});

let para2 = document.getElementById('p2');

para2.addEventListener('dblclick', function(){
    alert('Et là un double clique sur le paragraphe.');
});

// fonction récursive
function decompte(t) {
    if (t > 10) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte(t - 10);
    } else {
        return t;
    }
}//fin fonction

decompte(1000);