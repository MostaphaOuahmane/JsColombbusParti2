// alert('Hello');
  

//diaporama 2
document.getElementById('btnDiapo2').addEventListener('click',function(){
    document.getElementById('imgDiapo2').src ='img/piscine2.jpg';
    document.getElementById('imgDiapo2').alt ='une piscine aux seychelles';
})


//  diaporama 3

// on va faire une fonction tourneImages()

function tourneImages() {
    var getImage3 = document.getElementById('imgDiapo3').getAttribute('src');
    console.log(getImage3);
    switch(getImage3) {

        case 'img/plage1.jpg':
            console.log(getImage3)
                document.getElementById('imgDiapo3').src= 'img/plage2.jpg';
                document.getElementById('imgDiapo3').alt= 'page aux bahamas';

            break;
        case 'img/plage2.jpg':
                document.getElementById('imgDiapo3').src= 'img/plage3.jpg';
                document.getElementById('imgDiapo3').alt= 'page sur la côte';
            break;
        case 'img/plage3.jpg':
                document.getElementById('imgDiapo3').src= 'img/plage4.jpg';
                document.getElementById('imgDiapo3').alt= 'plage aux seychelles';
            break;
        case 'img/plage4.jpg':
                 document.getElementById('imgDiapo3').src= 'img/plage1.jpg';
                 document.getElementById('imgDiapo3').alt= 'page en corse';
             break;
    }

}
//  fin fonction tourneImageq


