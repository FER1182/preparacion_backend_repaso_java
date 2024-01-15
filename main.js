// const persona1 ={
//     nombre:"fer",
//     edad:41,
//     apellido:"rudnevich"
// }
// console.log(persona1)

function Mascotas(nombre,tipo,dueno,edad,castrado){
    this.nombre=nombre;
    this.tipo=tipo;
    this.dueno=dueno;
    this.edad=edad;
    this.castrado=castrado;

}


const simba = new Mascotas ("simba","gato","yael",5,true);
console.log(simba);
const mila = new Mascotas ("Mila","perro","fulanito gonzales",3,false);
console.log(mila)


const crearMascota =()=>{
    let nombreMascota = prompt("ingresa el nombre de tu mascoto");
    let tipoMascota = prompt("Que tipo de mascota es?");
    let nombreDueno = prompt("Como te llamas?");
    let edadMascota = Number( prompt("Que edad tiene"));
    let estaCastrado = prompt("esta castrado?");

    const mascota2 = new Mascotas(nombreMascota,tipoMascota,nombreDueno,edadMascota,estaCastrado);
    console.log(mascota2);
}