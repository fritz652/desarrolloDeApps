// Hackaton: Hacer uso de los objetos y arreglos
// Representar listas de tareas para completar, adicionalmente agregar la fecha en la que se completo y poder marcar tareas como completadas o pendientes
// Crear un sistema de registro de libros para una biblioteca, utilizar datos de los libros como autor, titulo, año de publicación, si el libro está prestado, etc
// Hacer un registro de egresos e ingresos en el mes, representar cada gasto e ingreso con los recursos necesarios, esto tiene que representar un mes de egresos e ingresos de dinero
// Hacer un registro de notas en un curso, 1U - 2U - 3U y al final sacamos el promedio de nota del curso

// Representar listas de tareas para completar, adicionalmente agregar la fecha en la que se completo y poder marcar tareas como completadas o pendientes
let listaDeCosasQuehacer = [
     {
       completado: false,
       todo:"Salir en bici",  
     },
     {
         completado: false,
         todo:"Limpiar la casa",  
     },
     {
         completado: false,
         todo:"lavar la ropa",  
     },
     {
         completado: false,
         todo:"HAcer ejercicio",  
     },
 
 ]


 // Crear un sistema de registro de libros para una biblioteca, utilizar datos de los libros como autor, titulo, año de publicación, si el libro está prestado, etc

 function Libro (id,titulo, año, prestado){
    this.id = id;
    this.titulo = titulo;
    this.año = año;
    this.prestado = prestado;
 }

let nuevoLibro = new Libro (
    prompt("ingresa id"), 
    prompt("ingresa titulo"), 
    prompt("ingresa año de publicación"), 
    prompt("¿El libro esta prestado?"),
)

let registrado = [
    document.write(`<p>Id: ${nuevoLibro.id} </p>`),
    document.write("<p>Título: " + nuevoLibro.titulo + "</p>"),
    document.write("<p>Año de publicación: " + nuevoLibro.año + "</p>"),
    document.write("<p>Prestado: " + nuevoLibro.prestado + "</p>"),
]






// Hacer un registro de egresos e ingresos en el mes, representar cada gasto e ingreso con los recursos necesarios, esto tiene que representar un mes de egresos e ingresos de dinero

function Ingreso (fecha, tipoDeingreso, montoPositivo){
    this.fecha = fecha;
    this.tipoDeingreso = tipoDeingreso;
    this.montoPositivo = montoPositivo;
}

function egreso (fechaE, tipoDeEgreso,montoNegativo){
    this.fechaE = fechaE;
    this.tipoDeEgreso = tipoDeEgreso;
    this.montoNegativo = montoNegativo;
}