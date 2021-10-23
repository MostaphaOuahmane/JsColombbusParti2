// alert('coucou');

let jour = prompt('1- Quel jour sommes-nous \n (avec if else if)');
console.log(typeof jour, jour);

let leP1 = document.getElementById('p1');

if (jour === 'lundi' || jour === 'Lundi') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est mardi ';
} else if (jour === 'mardi' ) {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est mercredi ';
} else if (jour === 'mercredi') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est jeudi ';
} else if (jour === 'jeudi') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est vendredi ';
} else if (jour === 'vendredi') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est samedi Youpi c\'est le week-end ';
    leP1.classList.add('bg-success','text-white');
} else if (jour === 'samedi') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est dimanche ';
    leP1.classList.add('bg-success','text-white');
}  else if (jour === 'dimanche') {
    leP1.innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain bon courage pour la semaine ! ';
} else {
    leP1.innerHTML = 'Ce jour n\'existe pas ! ';
}

// A FAIRE version RAchid avec tableau 

var jour2 = prompt('2- Quel jour sommes-nous \n (avec switch)');
console.log(typeof jour2, jour2);

let leP2 = document.getElementById('p2');

switch (jour2) {
    case 'lundi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est mardi '; 
    break; 
    case 'mardi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est mercredi '; 
    break;
    case 'mercredi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est jeudi '; 
    break;
    case 'jeudi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est vendredi '; 
    break;
    case 'vendredi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est samedi ';
    break;
    case 'samedi':
    leP2.innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est dimanche dodo ! '; 
    leP2.classList.add('bg-success','text-white','w-50');
    break;
    default:
    leP2.innerHTML = 'Ce jour n\'existe pas ! ';  
}