var boton1 = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var boton3 = document.querySelector("#boton3");
var boton4 = document.querySelector("#boton4");
var botonReset = document.querySelector("#reset");
var fondo1 = document.querySelector("fondo1");


function repreguntarNombre() {
    var nombre = prompt("Ingresa tu nombre");
    if (!nombre) {
        repreguntarNombre();
    }
    return nombre;
}
function preguntarNombre() {
    var nombre = repreguntarNombre();
    console.log("Un gusto " + nombre)
    return false;
}

preguntarNombre();

document.getElementById("boton1").addEventListener("click", function () {

    boton1.innerHTML = "Correcto!";

});

document.getElementById("boton2").addEventListener("click", function () {
    boton2.innerHTML = "Incorrecto!";


});


document.getElementById("boton3").addEventListener("click", function () {
    boton3.innerHTML = "Incorrecto!";

});



document.getElementById("boton4").addEventListener("click", function () {
    boton4.innerHTML = "Incorrecto!";


}
);



document.getElementById("reset").addEventListener("click", function () {
    boton1.innerHTML = "800";
    boton2.innerHTML = "301";
    boton3.innerHTML = "459";
    boton4.innerHTML = "100";
}
);

var contador = 60;

while(contador > 0){
    console.log("te quedan" + contador + "segundos");
    contador--;
}