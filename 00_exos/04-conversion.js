    // alert('coucou');

    var tempC = prompt('Rentrez une température en Celsius, merci.')
    // console.log(tempC);
    // console.log(9/5);
    // console.log(1*1.8);
    document.getElementById('li1').innerHTML = ' 1 degré Celsius = ' + ((1 * 1.8) + 32) +  ' Fahrenheit ';

    document.getElementById('li2').innerHTML = tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) +  ' Fahrenheit ';

    var tempF = (tempC * 1.8) + 32;
    console.log(tempF);
    document.getElementById('li3').innerHTML = ('1 degré Fahrenheit = ' + ((1 - 32 ) / 1.8) + ' Celsius ' );

    document.getElementById('li4').innerHTML = ( + tempF + ' degré(s) Fahrenheit = ' + ((tempF - 32 ) / 1.8) + ' Celsius ' );
    // console.log(document.querySelectorAll('li'));

    ///RAHID
    // conversion Celsius <==> Fahrenheit

// let varCelsius=prompt("Rentrez une température en Celsius:");
// let varFahrenheit = varCelsius * (9 / 5) + 32;

// console.log(varCelsius);
// // let query1 = document.querySelectorAll('li.cel-to-fah');
// // let query1 = document.getElementsByClassName('celtoFah');
// // console.log(query1);

// // Conversion de Celsius vers Fahrenheit
// document.querySelector('li.cel-to-fah').innerHTML = varCelsius + " degrès Celcius= " + varFahrenheit + ' Fahrenheit';
// document.querySelector('li#li2').innerHTML = varCelsius + " degrès Celcius= " + varFahrenheit + ' Fahrenheit';

// // Conversion de Fahrenheit vers Celsius
// document.querySelector('li.fah-to-cel').innerHTML = varFahrenheit + " degrès Fahrenheit = " + varCelsius + ' Celsius';

// const textCelsiusFahrenheit = "1 degré Celsius = 33.8 Fahrenheit";
// const textFahrenheit = "1 degrè Fahrenheit = -17.22222222222222 Celsius";