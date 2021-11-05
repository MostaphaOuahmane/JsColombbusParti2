// alert('coucou');
        // Controle du formulaire avec une fonction 
        // On verifie la longueur des contenus dans les 2 input

        function controleForm(event) {//event paramètre a enlever également
            event.preventDefault(); // pour empecher l'envoi du formulaire, à enlever quand le site est terminé

           if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15 ) {
               console.log(document.form1.pseudo.value);
               console.log(document.form1.pseudo.value.length);
               alert('Votre pseudo dois contenir entre 5 et 15 caractère');
           }
           
           if (document.form1.mdp.value.length < 3 || document.form1.mdp.value.length > 12 ) {
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
    function inscriptionform (event){
        event.preventDefault();
        //  récupération du contenu des champs du formulaire
        //  on cible dans des variable  les value de tous le chemps du form

        let prenom = event.target.prenom.value;
        let nom = event.target.nom.value;
        let email = event.target.email.value;
        let mdp2 = event.target.mdp2.value;
        let confmdp2 = event.target.confmdp2.value;
       

        
        console.log(prenom,nom,email,mdp2,confmdp2);

    }

