// coucou();
let x = 15, y = -20, z = 0;
console.log(x, y, z);

// page précédence 
document.getElementById('v1').innerHTML = (' la variable x contient ' + x );

document.getElementById('v2').innerHTML = (' la variable y contient ' + y );

document.getElementById('v3').innerHTML = (' la variable z contient ' + z );



if ( x>= 20 + y && x <= 10 || y < 0 ) {
    document.getElementById('p1').innerHTML = 'p1- Soit x = ' + x + ' compris entre 0 et 10, soit y strictement positif, soit les deux';
}

if ( x>= 20 + y && (x <= 10 || y < 0)) {
    document.getElementById('p2').innerHTML = 'p2- x positif et soit x inférieur à 10, soit y strictement positif, soit les deux';

}

