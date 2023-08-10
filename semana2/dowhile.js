//Do - while

/* do {
    //bloque o código de instrucciones
} while (condition); */

/* 
Escribir un programa que solicite al usuario que ingrese algo  y no permitirle 
que pulse "aceptar" con la caja vacía del alert, ni que pulse "cancelar"
*/

/* :::::::::buen ejemplo:::::: */
/* :::::::::::::::::::::::::::
::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::: */

/* let ingresar 
do {
    ingresar = prompt("Ingresa algo");
} while (ingresar ==null||ingresar =="");
alert("Ha ingresado: " +ingresar) */

/* :::::::::::::::::::::::::::
::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::: */


/* Crear un juego de adivinanzas de números en el que un 
usuario tiene que adivinar un número entre 1 y 10. Usaremos 
algún método matemático para generar un número aleatorio 
entre 1 y 10, luego pediremos al usuario que adine el 
número. Si aciertan el juego termina. podemos obtener la 
entrada del usuario con el método prompt(), usaremos el 
ciclo do while para seguir solicitándole al usuario que 
adivine el número hasta que lo adivine correctamente:*/ 

let adivinarNumero = 0;
let machine = Math.ceil(Math.random()*10);


do {
    adivinarNumero = parseInt(prompt("ingresa un numero del 1 al 10"))
    if(adivinarNumero == machine){
        alert("adivinaste el numero")
    }else{
        alert(`nuemro incorrecto, el numero era ${machine} intentalo denuevo`)
    }
} while (adivinarNumero != machine);
