"use strict"

//-----------------------------------Eventos de ratón-----------------------------------//
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');

boton1.addEventListener('click', function() {
    var text = document.createTextNode("Soy un evento click");                                    
    document.getElementById("ej1").appendChild(text);
    boton1.disabled=true;
});

boton2.addEventListener('mouseover', function() {
    var text2 = document.createTextNode("Soy un evento mouseover ");                                    
    document.getElementById("ej2").appendChild(text2);
});

boton3.addEventListener('mouseout', function() {
    var text3 = document.createTextNode("Soy un evento mouseout ");
    document.getElementById("ej3").appendChild(text3);
});


//al recargar (f5) la pagina, se restablecen los inputs a vacio.
window.addEventListener('load', function() {
    document.querySelector('#input1').value="";
    document.querySelector('#input2').value="";
    document.querySelector('#input3').value="";

//-----------------------------------Eventos de teclado-----------------------------------
    var input1 = document.querySelector('#input1');
    var input2= document.querySelector('#input2');
    var input3 = document.querySelector('#input3');

    input1.addEventListener('keydown', function(event) {
        var text4 = document.createTextNode(event.keyCode);
        var text4a = document.createTextNode(" Presionando Tecla valor: ");
        document.getElementById("ej4").appendChild(text4a);
        document.getElementById("ej4").appendChild(text4);
    });

    input2.addEventListener('keypress', function(event) {
        var text5 = document.createTextNode(event.keyCode);
        var text5a = document.createTextNode(" Tecla presionada cod. ASCII: ");
        document.getElementById("ej5").appendChild(text5a);
        document.getElementById("ej5").appendChild(text5);
    });

    input3.addEventListener('keyup', function(event) {
        var text5 = document.createTextNode(event.keyCode);
        var text5a = document.createTextNode(" Tecla liberada cod.: ");
        document.getElementById("ej6").appendChild(text5a);
        document.getElementById("ej6").appendChild(text5);
    });

});