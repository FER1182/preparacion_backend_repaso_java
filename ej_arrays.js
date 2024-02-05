// let lista = ["texto1","texto2",1,2,false,["texto3","texto4"],{nombre:"fer",
// apellido:"lopez"}]

// console.log(lista)
// console.log(lista[1]);
// console.log(lista[5][1]);
// console.log(lista[6].nombre);

// for(i=0;i<lista.length;i++){
//     let tipoDato = typeof lista[i]    
//     console.log("el elemento en la posicion "+ i+ " es "+  lista[i]);

// }

    
// console.log(lista.toString())

// let listaSuper = ["manzana","agua","leche","huevos","javon"];

// console.log(listaSuper)

// listaSuper.push("yerba")
// console.log(listaSuper)

// //let articuloNuevo = prompt("Que articulo queres comprar?")
// // listaSuper.push(articuloNuevo)
// listaSuper.sort()
// console.log(listaSuper)

// //***convertir un array con espacio q yo kiera ***/
// console.log(listaSuper.join("-"))

// //*** UNIR DOS LISTAS O ARRAYS***/

// let listaPanaderia = ["facturas","figasitas"]

// let listaFinal = listaSuper.concat(listaPanaderia);
// console.log(listaFinal)

class Productos{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

}
let listaProductos = []

const agregarProductos = ()=>{
    let nombreAgregado = prompt("que producto es?");
    let precioAgregado = parseFloat(prompt("cual es el precio?"));
    let producto = new Productos(nombreAgregado,precioAgregado);
    listaProductos.push(producto);
}

listaProductos.push(new Productos("agua",50));
listaProductos.push(new Productos("leche",150));
listaProductos.push(new Productos("arroz",900));
listaProductos.push(new Productos("servilleta",250));
listaProductos.push(new Productos("soda",2000));
listaProductos.push(new Productos("caramelo",250));
listaProductos.push(new Productos("soda",2154));
console.log(listaProductos);

/** 1ER METODO FOR OF PARA RECORRER UN ARRAY DE OBJETOS **/

// for(const obj of listaProductos){
//     console.log(obj.nombre)
// }

/** 2DO METODO FOR IN PARA RECORRER UN ARRAY DE OBJETOS **/

// for(const obj of listaProductos){
//     console.log(obj)
//     for(const prop in obj){
//         console.log(prop)
//     }
// }

/** 3ER METODO FOR EACH PARA RECORRER UN ARRAY DE OBJETOS **/

listaProductos.forEach(obj =>{
    console.log(obj.precio)
})

/** METODOS ** devuelve el primer elemento del array q satisface la comprobacion**/

//let search = prompt("Que queres buescar?")
// let buscaUno = listaProductos.find(obj =>obj.nombre === search)
// console.log(buscaUno)

// let buscaMuchos = listaProductos.filter(obj=>obj.nombre ===search)
// console.log(buscaMuchos)

// let buscaPorPrecio = listaProductos.filter(obj=>obj.precio< 200)
// console.log(buscaPorPrecio)

/** Map cambia un array y lo cambia a lo que yo le pida**/

let largo = listaProductos.map(obj=>obj.nombre.length )
console.log(largo)