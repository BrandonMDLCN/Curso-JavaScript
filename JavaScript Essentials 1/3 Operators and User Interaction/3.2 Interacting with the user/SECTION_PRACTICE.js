//write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.

let width = prompt("Hola ingresa grosor")
let height = prompt("ingresa altura")
let length = prompt("Ingrese longitud");

let volumen = width * height * length;

alert("El volumen es: " + volumen);

/*
Respuesta de Cisco

let width = prompt("Volume of the box, enter width", 0); 
let height = prompt("Volume of the box, enter height", 0); 
let length = prompt("Volume of the box, enter length", 0); 
let volume = width * height * length; 
alert(`Calculated box volume is ${volume}`);
*/