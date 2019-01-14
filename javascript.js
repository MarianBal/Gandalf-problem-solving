var middle_earth_danger = prompt('Is Middle earth in danger?', '');
var someone_else = prompt('Can someone else deal with it?');



if(middle_earth_danger == 'no') {
    document.write('Good!');
} else if(middle_earth_danger == 'yes'){
    prompt('Is Middle earth in danger?', '');

    if (someone_else == 'yes') {
        document.write('Good!');
    } else if(someone_else == 'yes'){
        prompt('Is Middle earth in danger?', '');
    }


}

/*
var numero1;
var numero2;
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
nombre = prompt('Ingresa un nombre: ','');

//console.log('Tu nombre es: ', nombre);
//alert('Nombre recibido');

//console.log(nombre);
//document.write(nombre);

numero1 = prompt('Ingresa un número: ','');
//document.write('Número 1: ');
//document.write(numero1);

document.write('Número 1: ', numero1);

document.write('<br/>');

numero2 = prompt('Ingresa un segundo número: ', '')
//document.write('Número 2: ');
//document.write(numero2);

document.write('Número 2: ', numero1);

document.write('<br/>');
var nombre;

nombre = prompt('Ingresá tu nombre','');
document.write('Hola ', nombre);

var numero;
numero = prompt('Ingresa un tercer número', '');

if(numero>10){
    document.write('El número es mayor a 10');
}

if(numero<10){
    document.write('El número es menor a 10');
}

if(numero==10){
    document.write('El es a 10');
} else{
    document.write('El número no es 10');
}

var numero1;
var numero2;
numero1 = prompt('Ingresa un numero',);
numero2 = prompt('Ingresa un segundo número',);

if(numero1 == numero2) {
    document.write('son iguales');
} else if(numero1>numero2){
    document.write('El primer número es mayor');
}else if(numero1<numero2){
    document.write('El primer número es menor');
}*/
/*
var password1;
var password2;

password1 = prompt('Ingrese su clave');
password2 = prompt('Reingrese su clave');

if (password1 == password2) {
    document.write('Iniciar sesión');
} else {
    document.write('No va a iniciar sesión');
}*/
