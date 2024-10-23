const descuento = x => x * 0.10
const recargo = x => x * 0.15
let productos = [
{idProducto: 1, nombre: "Sushi combo 16", presentacion: "en bandeja", precio: 3000, categoria: "Sushi"},
{idProducto: 2, nombre: "Sushi combo 25", presentacion: "en bandeja", precio: 5000, categoria: "Sushi"},
{idProducto: 3, nombre: "Sushi combo 40", presentacion: "en bandeja", precio: 7000, categoria: "Sushi"},
{idProducto: 4, nombre: "Sushi combo 60", presentacion: "en bandeja", precio: 12000, categoria: "Sushi"},
{idProducto: 5, nombre: "Vino Merlot", presentacion: "Botella de 1 Litro", precio: 1280, categoria:"Vino"},
{idProducto: 6, nombre: "Vino Colon", presentacion: "Copa", precio: 2663, categoria: "Vino"},
{idProducto: 7, nombre: "Vino Luigi Bosca",  presentacion: "Botella de 1 Litro y medio", precio: 1716, categoria: "Vino"},
{idProducto: 8, nombre: "Vino Trumpeter", presentacion: "Botella de 2 Litros", precio: 1266, categoria: "Vino"},
{idProducto: 9, nombre: "Salsa de mango", presentacion: "embase chico",precio: 7300, categoria: "Salsas preparadas"},
{idProducto: 10, nombre: "Salsa de soja", presentacion: "embase chico", precio: 7300, categoria: "Salsas preparadas"},
{idProducto: 11, nombre: "Salsa especial basai", presentacion: "embase chico", precio: 8500, categoria: "Salsas preparadas"}
]
let opcionCompra = ""
let productosFiltrados = []
let carrito = []
let salida =[]
let subtotal = 0
let totalAPagar = 0

alert("Bienvenido a Mundo Basai: Sushi")
let nombre = prompt("Ingrese su nombre").trim().toUpperCase()
let edad = Number(prompt("Ingrese su edad"))

if (edad >= 18) {
  alert("Bienvenido " + nombre)
  alert("A continuación Usted podrá realizar la compra. \nRecuerde que comprando tres o más unidades se realizará un descuento de 10%.")
  do {
    opcionCompra = prompt("Ingrese la categoria a comprar: \n1-Sushi\n2-Vino\n3-Salsas preparadas\n0-Para finalizar compra")
    switch (opcionCompra) {
      case "1":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Sushi"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
         carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
      
        break
      case "2":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Vino"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        break
      case "3":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Salsas preparadas"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          
          carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        
        break
      case "0":
        break
      default:
        alert("Por favor ingrese alguna de las opciones válidas")
        break
    }
  } while (opcionCompra != 0)
    let cantidadTotalComprada = carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0)
    let productosYpresentacion= carrito.forEach(producto =>{salida = salida + producto.venta + " unidades de " + producto.nombre + " " + producto.presentacion + " de la categoria " + producto.categoria +"\n"})
    if (cantidadTotalComprada < 3 && cantidadTotalComprada > 0) {
      alert(salida)  
      let sumatoria = carrito.forEach(producto =>{subtotal = subtotal + (producto.venta * producto.precio)})
                totalAPagar = subtotal 
        alert("Usted ha comprado " + carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0) + " unidades. \nNo posee descuento\nTotal a pagar: $ "+totalAPagar)
      }  
    if (cantidadTotalComprada >= 3) {
      alert(salida)  
        sumatoria = carrito.forEach(producto =>{subtotal = subtotal + (producto.venta * producto.precio)})
        totalAPagar = subtotal + Number(descuento(subtotal).toFixed(2))
        alert("Usted ha comprado " + carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0) + " unidades. \nHa sido beneficiado por un descuento de $ " + descuento(subtotal).toFixed(2) + "\nTotal a pagar: $ " + totalAPagar)
         
    cantidadCuotas = Number(prompt("Por favor ingrese la cantidad de cuotas en las que desea abonar"))
    if (cantidadCuotas === 1) {
      alert("Usted abonará en un pago el total de: $" + totalAPagar + "\nNo se han sumado cargos por financiación")
      
    } else {
      let totalAPagarFinanciado = totalAPagar + Number(recargo(totalAPagar).toFixed(2))
      alert("Usted abonará en un cuotas el total de: $" + totalAPagarFinanciado + "\nSe han sumado cargos por financiacion por $ "+recargo(totalAPagar).toFixed(2))
    for (let i = 0; i < cantidadCuotas; i++) {
        let salidaCuotas = "Pagará en " + cantidadCuotas + " cuotas de $" + (totalAPagarFinanciado / cantidadCuotas).toFixed(2) +"\n Cuota " + (i+1) + " de $ " + (totalAPagarFinanciado / cantidadCuotas).toFixed(2)
        alert(salidaCuotas)   
            }
          }
    alert("Muchas gracias " + nombre + " por comprar en Mundo Basai: Sushi \nEsperamos nuevamente por usted para más compras")
        }     
      else {
        alert("Usted no ha comprado nada. Vuelva pronto")
      }
}
    else{
    alert("Para comprar debe ser mayor de edad")}