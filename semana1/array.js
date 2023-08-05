//arrays

//Declarando el array dias

let dias = ['lunes','martes','miercoles','jueves','vierenes','sabado','domingo'];

//accediendo a los elementos
console.log(dias[0]);
console.log(dias[1]);
console.log(dias[2]);
console.log(dias[3]);
console.log(dias[4]);
console.log(dias[5]);
console.log(dias[6]);

// .length: muestra la cantidad de elemento de un array


let cantidadDeElementos = console.log(dias.length);

// por tanto si queremos saber el n elemento pues hacemos los siguiente

let ultimoElemento = console.log(dias[dias.length-1])

//.pus: agrega elementos al final del array:

dias.push('Nuevo día');
console.log('Nuevo dia es el dia agregado', dias);

// unshift: agrega elemento sla inicio del array:

dias.unshift('día anterior');
console.log('dia anterior es el dia agregado', dias);

console.log(`dia dia dia ${dias}`) // al llamar de esta forma se concatena y se vuelve como un string



//.pop: elimina el ultimo elemento del array

console.log(dias.pop());
console.log(dias)

//.shift: elimina el primer elelmento de un array

console.log(dias.shift(),dias);  // la , seguido dias es para llamar al array

//splice: elimina y agrega nuevos elementos
dias.splice(2,1); // aqui se le ldice que borre en la poscicion 2 un solo elemento
console.log(dias);

//delete: elimina la posición del array
delete(dias[0]);
console.log(dias);
