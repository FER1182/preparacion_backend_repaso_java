/*
1. crear una clase con un contructor para productos
que acepte nombre categoria precio descuento stock

2.crear un metodo q aplique un 10% si el precio es mayor a 1000
y del 5% si es menor
quiero ver el precio final

3.crear un metodo que se llame comprar  y que acepte cantidad como parametro 
este metodo actualizara el stock y me diga cuantos quedan
*/

class Productos{
    constructor(nombre,categoria,precio,stock){
        this.nombre= nombre;
        this.categoria=categoria;
        this.precio=precio;
        this.stock=stock    
    }
    bonificacion(){
        if(this.precio>1000){
            this.precio = this.precio *0.9
            console.log(this.precio)
        }else{
            this.precio = this.precio *0.95
            console.log(this.precio)
        }
    }
    comprar(cantidad){
        if(this.stock>cantidad){
            this.stock-=cantidad;
            console.log("compraste "+ cantidad+ " quedan " + this.stock + " el costo final es de $" + (this.precio*cantidad))
        }else{
            console.log("no te puedo dar esta cantidad el stock es de "+ this.stock + " unidades")
        } 
    
    } 
}
const producto1 = new Productos("heladera","electrodomesticos",50000,50);
console.log(producto1);
producto1.bonificacion()
producto1.comprar(3)