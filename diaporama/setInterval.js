// alert('Hello');
let varImg = 0 ;
console.log(typeof varImg, varImg);

let timer = window.setInterval('monDiaporama()',1000);


let getAttrImg = document.getElementById( 'imgDiapo1').getAttribute('src');
console.log(typeof getAttrImg,getAttrImg);
 function monDiaporama() {
     varImg +=1;//on icrément et on affecte 1
     imgDiapo1.setAttribute('src','img/'+varImg+'.jpg');
     console.log('la varImg = '+varImg);

     if (varImg == 6){
         clearInterval(timer);
     }
 }

 4//formulaire

 document.querySelector('#email').addEventListener('focus',InputEmailFocus);

 function InputEmailFocus(){
     this.classList.add('bg-pink');
 }