// coucou();

//page des évènements
// 1 Évènement  avec une fonction 
//je séelctionne la div rouge
let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);
//on va utiliser 
event1.addEventListener('click',fonctionDivRouge);

function fonctionDivRouge() {
    alert('Vous avez cliqué sur la div #rouge !');
    this.style.backgroundColor = "green";
}
// création de la fonction
// si je veux débugger la fonction je peux passer e comme event dans les paramètres et faire un console.log(e) dans la fonction 
// function fonctionDivRouge(e) {
//     console.log(e);
//     alert('Vous avez cliqué sur la div #rouge !');
// }

// second exemple avec une fonction anonyme
// let event2 = document.querySelector('#p1');
// console.log(event2);

// event2.addEventListener('click', function() {
//     alert('Vous avez cliqué sur le paragraphe id p1');
//     this.style.background = "green";
//     this.style.color = "black";
// });

 // la même fonctionnalité sans utilisation de variable
document.querySelector('#p1').addEventListener('click', function() {
    alert('Vous avez cliqué sur le paragraphe id p1');
    this.style.background = "green";
    this.style.color = "black";
});


// 2-  nouveau mot-clef "mouseover"

document.getElementById('orange').addEventListener('mouseover', fonctionDivOrange);

function fonctionDivOrange(e) {
    // console.log('e :', e);
    // console.log('this : ', this);
    // alert('Vous avez survolé la div #orange');
    //je change le texte
    this.innerHTML = "coucou";
    // je change la taille de typo à 1.5em
    this.style.fontSize = "1.5em";
    // this.style.display = "none";
}

// 3-  nouveau mot-clef "mouseout"
document.querySelector('#bleu').addEventListener('mouseout', fonctionDivBleu);

function fonctionDivBleu(e) {
    // console.log('mouseout e :', e);
    // alert('Vous êtes passé sur la div #bleu');
    this.innerHTML = "coucou2";
    this.style.fontSize = "1.5em";
}


 4//formulaire

 document.querySelector('#email').addEventListener('focus',InputEmailFocus);
//  focus qaund on est dans le champs

 function InputEmailFocus(){
     this.classList.add('bg-secondary');
     this.classList.add('text-white');
 }
//  document.querySelector('#email').addEventListener('focusout',InputPassFocus);

//  function InputPassFocus(){
//      this.classList.add('btn-primary');
//      this.classList.add('text-white');
//  }


document.querySelector('#pass').addEventListener('blur',InputPassBlur);

// blur  change l'apparence quand il perd le focus

function InputPassBlur(){
    this.classList.add('btn-primary');
    this.classList.add('text-white');
}
// écouteur d'évènement  sur le bouton avec click

document.querySelector('#submit').addEventListener('click',inptBtnSubmit);
function inptBtnSubmit(event) {
    // event.preventDefaul();
    alert('Nous avons bien reçu votre Formulaire');
    this.classList.add('bg-success');
    this.innerHTML="Félicitation vous êtes connecté";
}


