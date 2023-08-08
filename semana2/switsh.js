//Estructura Switch

//Sintaxis


/* switch (condicion) {
    case value:

    break;

    default:
        break;
}
 */

// Escribe un calculadora simple:

let result;
let operator = prompt("Ingrese el operador (+,-,*,/)");

let numero1 =parseInt(prompt('Ingrese el primer número'));
let numero2 = parseInt(prompt('Ingrese el segundo número'));

switch(operador) {
    case "+":
        result = numero1 +numero2;
        alert(`la suma es ${numero1} + ${numero2}`); // interpolacion de string
        break;
    case "-":
        result = numero1 - numero2;
        alert(`la resta es ${numero1} - ${numero2}`);
        break;
    default:
        alert('operador invalido');
}




//Escribir un programa que solicite al usuario que ingrese un número del uno al diez(el usuario debe ingresar en cifras) y lo muestre escrito en letras, adicional si ingresa un número fuera del rango establecido le muestre un mensaje enviándole un error.




