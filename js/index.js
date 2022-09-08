class Producto {
    constructor(id, nombre, precio, talle, disponibilidad) {
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.talle = talle
        this.disponibilidad = disponibilidad
    }
    
    habilitar(){
        let error = "producto disponible"
        if(this.disponibilidad == false){
           this.disponibilidad = true
        } else{
          console.log(error)
        }
    }

    desabibilitar (){
        let error = "producto no disponible"
        if(this.disponibilidad == true){
            this.disponibilidad = false
        } else {
            console.log(error)
        }
    }
}

const productos= [];

function inventario (){
productos.push(new Producto ("1","buzo corderito", 800, "1", true));
productos.push(new Producto("2","buzo corderito", 1000, "2", false));
productos.push(new Producto("3","buzo corderito", 1200, "3", true));
productos.push(new Producto("4","disfraz perro ", 650, "1", true));
productos.push(new Producto("5","disfraz perro", 850, "2", true));
productos.push(new Producto("6","disfraz perro", 1000, "3", true));
productos.push(new Producto("7","funda para auto con lateral", 8000, "unico", false));
productos.push(new Producto("8","funda para auto sin lateral", 6000, "Único", true));
productos.push(new Producto("9","correa para perro",900 , "Único", true));
productos.push(new Producto("10","pretal", 1600, "Único", false));
console.table(productos)
 }


function compras (){
    let compra = confirm("¿Desea comprar un producto?")
    if (compra === true){
    inventario()
    let productoCompra = prompt("Ingrese el nombre del producto").toLocaleLowerCase();
    let resultado = productos.filter(producto=> producto.nombre == productoCompra)
    console.table(resultado)
    let nuevoProducto = true
    while(nuevoProducto){
        nuevoProducto = confirm("desea agregar un nuevo producto" )
        if (nuevoProducto == true) {
            productoCompras = prompt ("ingre el nombre del producto")
            let nuevoProducto = productos.filter(producto=> producto.nombre == productoCompras)
            resultado = resultado.concat(nuevoProducto)
            console.table(resultado)
        }else {
            alert("gracias por su compra")
        } 
        
    }
    
}else {
    console.log("gracias por su visita")
}
 }



