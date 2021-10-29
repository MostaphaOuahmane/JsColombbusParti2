// alert("hello saisie");
var nombre =0;
console.log(typeof nombre,nombre);

 while (nombre<50 || nombre>100) {
     nombre=parseInt(prompt(' Entre un nombre entre 50 et 100 :'));
     console.log(typeof nombre,nombre);
 }
 document.write('<p> vous avez rentré le chiffre '+ nombre +'  '+  'la variable  récupérée est bien comprise entre 50 et 100 . </p>')