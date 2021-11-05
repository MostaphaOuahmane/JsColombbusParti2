// alert('coucou');
// Controle du formulaire avec une fonction 
// On verifie la longueur des contenus dans les 2 input

function controleForm(event) {//event paramètre a enlever également
    event.preventDefault(); // pour empecher l'envoi du formulaire, à enlever quand le site est terminé
    if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15) {
        console.log(document.form1.pseudo.value);
        console.log(document.form1.pseudo.value.length);
        alert('Votre pseudo dois contenir entre 5 et 15 caractère');
    }
    if (document.form1.mdp.value.length < 3 || document.form1.mdp.value.length > 12) {
        console.log(document.form1.mdp.value);
        console.log(document.form1.mdp.value.length);
        alert('Votre mot de passe dois contenir entre 3 et 12 caractère');
    }
}
//    contrôle du formulaire inscription avec une fonction 
// récupére le form par son id dans variable 

let formInscrip = document.getElementById('formulaireInscription');
console.log(formInscrip);

// écoute de l'envoie du formulaire 
formInscrip.addEventListener('submit', inscriptionform);
// cration fonction 
function inscriptionform(event) {
    event.preventDefault();
    //  récupération du contenu des champs du formulaire
    //  on cible dans des variable  les value de tous le chemps du form
    let prenom = event.target.prenom.value;
    let nom = event.target.nom.value;
    let email = event.target.email.value;
    let mdp2 = event.target.mdp2.value;
    let confmdp2 = event.target.confmdp2.value;
    console.log(prenom, nom, email, mdp2, confmdp2);
    //  experssion régulière 
    // https://regex101.com/
    let regx = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");
    // avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et - 
    //après @ il faut au minimun 2 caractères puis un . et de à a z et au minimum 2 caractères
    console.log(regx)

    // / classList représente toute les classes de l'élément event.target
    // add ajoute une class à l'élément event.target
    // console.log(event.target.prenom.classList);
    // remove enléve la class
    // prenom et nom ne sont pas vides
    if (prenom !== '' || nom !== '') {
        if (prenom.length < 2) {
            event.target.prenom.classList.add("error");
            event.target.prenom.classList.remove("valide");
        } else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
        }
        if (nom.length < 4) {
            event.target.nom.classList.add("error");
            event.target.nom.classList.remove("valide");
        } else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error");
        }
    } // fin condition sur le nom est le prénom

    // condition 2 l'utilisateur a-t-il saisi la même mot de passe

    let placeholder1 = document.getElementById('placeholder1')
    let placeholder2 = document.getElementById('placeholder2')

    if (confmdp2 != mdp2) {
        // event.target.mdp2.classList.add("error");
        // event.target.mdp2.classList.remove("valide");
        // event.target.confmdp2.classList.add("error");
        // event.target.confmdp2.classList.remove("valide");
        placeholder1.innerHTML = "vos mots de passe doivent être identique";
        placeholder1.classList.add("rouge");
        placeholder2 .innerHTML = "vos mots de passe doivent être identique";
        placeholder2 .classList.add("rouge");
    } else if (mdp2.length < 8 || mdp2.length > 12) {
        event.target.mdp2.classList.add("error");
        event.target.mdp2.classList.remove("valide");
        event.target.confmdp2.classList.add("error");
        event.target.confmdp2.classList.remove("valide");
    } else {
        event.target.mdp2.classList.add("valide");
        event.target.mdp2.classList.remove("error");
        event.target.confmdp2.classList.add("valide");
        event.target.confmdp2.classList.remove("error");

    }

    // condition 2 l'utilisateur a-t-il saisi la même mot de passe
    // if((confmdp2!=mdp2 ) || (mdp2.length < 8 || mdp2.length > 15) ) {
    //     event.target.mdp2.classList.add("error");
    //     event.target.mdp2.classList.remove("valide");
    //     event.target.confmdp2.classList.add("error");
    //     event.target.confmdp2.classList.remove("valide");
    //  } else {
    //      event.target.mdp2.classList.add("valide");
    //     event.target.mdp2.classList.remove("error");
    //     event.target.confmdp2.classList.add("valide");
    //     event.target.confmdp2.classList.remove("error");

    //  }

    // utilisation de l'expression réguliére
    // vérification  si les caractérs de l'email sont autorisés par l'expression régulière 

    console.info(regx.test(email));
    if (regx.test(email) === false) {
        event.target.email.classList.remove("valide");
        event.target.email.classList.add("error");

    } else {
        event.target.email.classList.remove("error");
        event.target.email.classList.add("valide");
    }

} // fin fonction 

// bouton effacer

document.getElementById('restForm').addEventListener('click', function (event) {
    event.target.form.prenom.value = '';
    event.target.form.nom.value = '';
    event.target.form.email.value = '';
    event.target.form.mdp2.value = '';
    event.target.form.confmdp2.value = '';
});


