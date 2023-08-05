/*  crear un objeto para contener infomacion acerca de una receta,
 debe tener propiedades de cadena de texto, numero y un array 
 de strings */

let receta = {
    titulo: "Ají de gallina",
    porciones: 5,
    ingredientes: ["gallina", "aji amarillo", 
    "leche", "pan", "pecanas", "arroz"]
}

// llamano a elemnetos de un objeto:

console.log(`nuestra receta se llama:`, receta.titulo);
console.log(`las porciones son`, receta.porciones);
console.log(`los ingrediente son:`, receta.ingredientes);


// queremos que se muestr como un string y no como llavas entonces aplicamos un for


for(let i=0; i < receta.ingredientes.length; i++){
    console.log(receta.ingredientes[i]);
}