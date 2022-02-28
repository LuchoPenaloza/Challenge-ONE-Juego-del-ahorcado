//Reglas
function dibujarReglas() {
    pincel.fillText("REGLAS",25,35);
    pincel.fillText("1.- Si previamente al juego, deseas agregar una nueva palabra a la lista de palabras",25,75);
    pincel.fillText("     originales a adivinar, puedes hacerlo escribiendo en el box correspondiente y dando",25,105);
    pincel.fillText("     click en el botón AGREGAR PALABRA",25,135);
    pincel.fillText("2.- Luego del paso previo, y si ya estás listo, puedes comenzar a jugar dando click en",25,165);
    pincel.fillText("     el boton INICIAR JUEGO",25,195);
    pincel.fillText("3.- Recuerda SOLO usar letras de tu teclado para completar el juego y poder ganar. Solo",25,225);
    pincel.fillText("     tendrás nueve intentos para adivinar (no se contabilizan las letras repetidas y/o los",25,255);
    pincel.fillText("     caracteres o teclas que NO son letras)",25,285);
    pincel.fillText("4.- Cuando finalice el juego, recibirás un mensaje de victoria o derrota. Para volver a",25,315);
    pincel.fillText("     jugar, es IMPORTANTE darle click al botón REINICIAR JUEGO que aparecerá al final,",25,345);
    pincel.fillText("     o puedes volver a cargar la página con el botón actualizar del navegador.",25,375);
}

//Base
function dibujarBase() {
    pincel.beginPath();
    pincel.moveTo(10,390);
    pincel.lineTo(110,390);
    pincel.lineTo(60,370);
    pincel.closePath();
    pincel.stroke();
}

//Parante
function dibujar0() {
    pincel.beginPath();
    pincel.moveTo(60,370);
    pincel.lineTo(60,10);
    pincel.stroke();    
}

//Volado
function dibujar1() {
    pincel.beginPath();
    pincel.moveTo(60,10);
    pincel.lineTo(310,10);
    pincel.stroke();
}

//Perfil
function dibujar2() {
    pincel.beginPath();
    pincel.moveTo(310,10);
    pincel.lineTo(310,50);
    pincel.stroke();
}

//Cabeza
function dibujar3() {
    pincel.beginPath();
    pincel.arc(310,90,40,0,2*3.1416);
    pincel.stroke();
}

//Tronco
function dibujar4() {
    pincel.beginPath();
    pincel.moveTo(310,130);
    pincel.lineTo(310,260);
    pincel.stroke();
}


//Pierna izquierda
function dibujar5() {
    pincel.beginPath();
    pincel.moveTo(310,260);
    pincel.lineTo(240,340);
    pincel.stroke();
}

//Pierna derecha
function dibujar6() {
    pincel.beginPath();
    pincel.moveTo(310,260);
    pincel.lineTo(380,340);
    pincel.stroke();
}

//Brazo izquierdo
function dibujar7() {
    pincel.beginPath();
    pincel.moveTo(310,195);
    pincel.lineTo(240,125);
    pincel.stroke();
}

//Brazo derecho
function dibujar8() {
    pincel.beginPath();
    pincel.moveTo(310,195);
    pincel.lineTo(380,125);
    pincel.stroke();
}

//Carita feliz
function caritaFeliz() {
    pincel.beginPath();
    pincel.moveTo(270,130);
    pincel.lineTo(270,210);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(200,130);
    pincel.lineTo(200,210);
    pincel.stroke();
    pincel.beginPath();
    pincel.arc(235,210,70,0,3.1416);
    pincel.stroke();
}

//Carita triste
function caritaX() {
    pincel.beginPath();
    pincel.moveTo(285,65);
    pincel.lineTo(335,115);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(335,65);
    pincel.lineTo(285,115);
    pincel.stroke();
}

/*
verde claro
#EFF6EA

verde claro intermedio
#F4F9F1

verde mas claro
#F9FBF7
*/