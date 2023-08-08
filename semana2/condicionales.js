//un programa condicional que contiene lo siguiente:

/* una condicion tiene los siguientes: 
-cuando es true o cuando es false 
-un bloque de programa se ejecuta cuando la condición es true.
-un bloque de programa se ejecuta cuando la condicion es false.
*/


/* tome un número del usuario como entrada, si es entre 10 y 99 o ambos inclusive, entonces mostrará "dos digitos", de lo contrario se mostrará "no son dos dígitos" */

/* let numeroEntrada = parseInt(prompt("Ingrese un numero  entro el 10 y el 99"));


if(numeroEntrada <=99 && numeroEntrada>=10){
    document.write(`Elnumero es ${numeroEntrada}`);
} else{
    document.write(`Elnumero no es valido`);
} */

// escribir un numero que tome un numero de entrada y  muestra la suma de  sus digitos. Asumimos que el usuario ingresara un numero positivo de hasta  4 digitos


let suma = 0;

let numero = parseInt(prompt('Ingrese el número : '));

 

if(numero > 0 && numero <10000){

    suma = suma + numero%10; //suma += numero % 10, agregando el residuo a la variable suma

    numero = parseInt(numero/10); // agregando el cociente al número

 

    if (numero > 0){

        suma = suma + numero%10;

        numero = parseInt(numero/10);

    }

 

    if (numero > 0){

        suma = suma + numero%10;

        numero = parseInt(numero/10);

    }

 

    if (numero > 0){

        suma = suma + numero%10;

        numero = parseInt(numero/10);

    }

   

    console.log('la suma de los dígitos es : ' + suma);

}else{

    console.log('el número es inválido');

}

//Escribir un programa en el cual debe calcular el pago de un empleado en función de las horas trabajadas. la entrada incluye el total de horas trabajadas por semana del empleado y su tarifa de pago por hora. Al empleado se le pagará un salario base por las primeras 40 horas trabajadas y  tiempo extra( 150% del salario base)por cualquier hora despues de las 40 horas como pago de horas extras. mostrar el pago regular, el pago de horas extras y el pago total de la semana por pantalla, si el empleado trabajó menos de 40 horas, muestre resultado que no ha realizado ninguna hora extra  relacionado con el pago de horas extras.




//notas:

parseInt ("10");//10
parseInt ("10.5");//10
parseInt ("numero 10");// 10
parseInt ("numero");// NaN
