//"use strict"

const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');

boton1.addEventListener('click', function() {
    var text = document.createTextNode("Soy un evento click");                                    
    document.getElementById("ej1").appendChild(text);
    boton1.disabled=true;
});

boton2.addEventListener('mouseover', function () {
    var text2 = document.createTextNode("Soy un evento mouseover ");                                    
    document.getElementById("ej2").appendChild(text2);
});

boton3.addEventListener('mouseout', function () {
    var text3 = document.createTextNode("Soy un evento mouseout ");
    document.getElementById("ej3").appendChild(text3);
});