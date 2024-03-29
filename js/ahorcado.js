// Definiendo CANVAS
var pantalla = document.querySelector("#ahorcado");

var pincel = pantalla.getContext("2d");
pincel.strokeStyle = "#548235";
pincel.font = "bold 22px sans-serif";


// Dibujando REGLAS para presentación previa del juego
pincel.fillStyle = "#548235";
dibujarReglas();


// Lista de palabras original
var palabras = ["ALURA","ORACLE","ONE"];


// Sortear lista de palabras
function sortear(){
    var aleatorio = Math.round(Math.random()*(palabras.length-1));
    var palabraSorteada = palabras[aleatorio];
    return palabraSorteada;
}


// Guiones para palabra sorteada
function guiones(palabra) {
    for (var index = 0; index < palabra.length; index++) {
        pincel.beginPath();
        pincel.moveTo((500+50*index),380);
        pincel.lineTo((525+50*index),380);
        pincel.stroke();
    }
}


// Verificar que la nueva palabra sea válida
function verificarDatos(texto) {
    var myRegex = /[^A-ZÑ\s]/g;
    var result = myRegex.test(texto);

    if (result) {
        alert("No se permiten vocales con tilde ni caracteres especiales");
        return false;
    }
    else {
        return true;
    }
};


// AGREGAR NUEVA PALABRA EN LISTA
var nuevaPalabra = document.querySelector("#nueva-palabra");

function agregarPalabra() {
    var capturarPalabra = document.querySelector("#input-nueva-palabra");
    var palabraCapturada = capturarPalabra.value.toUpperCase(); 

    if (capturarPalabra.value != "") {    
        if (verificarDatos(palabraCapturada)) {
            if (!palabras.includes(palabraCapturada)) {
                palabras.push(palabraCapturada);
            }
            else {
                alert("Esta palabra YA está ingresada");    
            }
        }

        capturarPalabra.value = "";
    }

    else {
        alert("Recuerda ingresar una nueva palabra en el recuadro");
    }
}

nuevaPalabra.onclick = agregarPalabra;


// JUEGO DEL AHORCADO
var numNoAgrup;
var agrupados;
var numAgrup;

var jugar = document.querySelector("#iniciar-juego");

jugar.addEventListener("click",function(){

    numNoAgrup = 0;
    agrupados = [];
    numAgrup = 0;

    pincel.clearRect(0,0,pantalla.width,pantalla.height);
    dibujarBase();
    var palabraAhorcado = sortear();
    guiones(palabraAhorcado);

    document.addEventListener('keydown',function(event){
        const keyName = event.key;
        var patron = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        letra = keyName.toUpperCase();
        var palabraAhorcadoString = palabraAhorcado.split("");
           
        if (patron.includes(letra)) {

            if (!agrupados.includes(letra)) {

                // Iteración para caso VICTORIA
                for (var index = 0; index < palabraAhorcadoString.length; index++) {
                    if (letra == palabraAhorcadoString[index]) {
                        pincel.fillStyle = "#2F75B5";
                        pincel.fillText(letra,(505+50*index),375);
                        numAgrup = numAgrup + 1;
                    }
                }
                
                if (numAgrup == palabraAhorcadoString.length) {
                    pincel.fillStyle = "blue";
                    pincel.fillText("Ganaste, felicidades!",650,200);
                    pincel.clearRect(0,0,450,pantalla.height);
                    pincel.strokeStyle = "blue";
                    caritaFeliz();
                    pincel.fillStyle = "#548235";
                    pincel.fillText("Para REINICIAR EL JUEGO da click abajo",550,250);
                    pincel.fillText("en el botón respectivo",650,280);
                    reiniciar.classList.remove("invisible");
                }
                
                // Iteración para caso DERROTA
                if (!palabraAhorcado.includes(letra)) {
                    if (numNoAgrup == 0) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar0();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 1) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar1();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 2) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar2();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 3) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar3();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 4) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar4();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 5) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar5();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 6) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar6();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 7) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar7();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 8) {
                        pincel.fillStyle = "#7B7B7B";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar8();
                        pincel.fillStyle = "red";
                        pincel.fillText("Fin del juego!",690,200);
                        pincel.strokeStyle = "red";
                        caritaX();
                        pincel.fillStyle = "#548235";
                        pincel.fillText("Para REINICIAR EL JUEGO da click abajo",550,250);
                        pincel.fillText("en el botón respectivo",650,280);
                        reiniciar.classList.remove("invisible");
                    }
                }

                agrupados.push(letra); //Para acumular letras ya usadas en la iteración
            }
            
            else {
                alert("Por favor NO repetir letras ya seleccionadas");
            }
        }

        else {
            alert("Por favor SOLO usar letras");
        }        

    });

});


// REINICIAR JUEGO
var reiniciar = document.querySelector("#reiniciar-juego");

reiniciar.addEventListener("click",function(){
    location.reload();
});