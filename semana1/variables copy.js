// VARIABLES


//definiendo variables
var miVariableAntigua; // forma natigua de definir una variable
let miVariableActual;  // forma actual de definir una variable
miVariableConst = 3.14; // una constante se debe define si o si con su inicializacion


// inicializando variables
miVariableAntigua = "hola";
miVariableActual = 50;



// visualizando variables:
console.log(miVariableActual);  //50
alert(miVariableAntigua); // hola  se ve en el documento html de la web
document.write(miVariableActual);// 50


/* //vkues into javascript
"hello wordl" // string
true            // boolean
[1,2,3] // Array
function run (a,b) // function
{a:1, b:2, c:3} //object
100 // number */

// concatenar con variables de tipo string   alt+z

var textoA = "Desarrollode aplicaciones";
let tectoB = "MOVILES - IDAT";
const espacioEnBlanco = " ";


let resultadoA = textoA + " " + tectoB;

console.log(resultadoA);
document.write(resultadoA);