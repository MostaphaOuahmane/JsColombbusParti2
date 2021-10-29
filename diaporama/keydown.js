// alert("hello word"); js keydown

document.addEventListener('keydown',clavier);
document.onkeydown = clavier;
console.log(document.getElementById('move'));

// fonction clavier ()
document.addEventListener('keydown', clavier);
            document.onkeydown = clavier;

            console.log(document.getElementById('move'));

            function clavier(e) {
                var carre = document.getElementById('move')
                if (e.keyCode == '38') { // 38 flèche du haut
                    carre.style.top = (carre.offsetTop - 20) + 'px';
                } else if (e.keyCode == '39') {// 39 flèche de droite
                    carre.style.left = (carre.offsetLeft + 20) + 'px';
                } else if (e.keyCode == '40') {// 40 flèche du bas
                    carre.style.top = (carre.offsetTop + 20) + 'px';
                } else if (e.keyCode == '37') {// flèche de gauche
                    carre.style.left = (carre.offsetLeft - 20) + 'px';
                }
            }// fin fonction clavier