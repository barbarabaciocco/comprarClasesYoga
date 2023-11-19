let nombreCompleto = prompt("Ingresa tu nombre")
console.log("Bienvenido/a" , nombreCompleto)

const carrito = []

const clases = [ {codigo: 1, nombre: "Hatha Yoga", precio: 1000},
                {codigo: 2, nombre: "Yoga Flow", precio: 1200},
                {codigo: 3, nombre: "Aero Yoga", precio: 1600},
                {codigo: 4, nombre: "Fitness Yoga", precio: 1400},
                {codigo: 5, nombre: "Kundalini Yoga", precio: 1800},
                {codigo: 6, nombre: "Yoga Pre-Natal", precio: 1300},
                {codigo: 7, nombre: "Yoga Suave", precio: 1100},
                {codigo: 8, nombre: "Power Yoga", precio: 1500},
                {codigo: 9, nombre: "Ajustes de Posturas", precio: 1900},
                {codigo: 10, nombre: "Yoga para niños", precio: 900}]

function consultarClases(codigo) {
    let claseSeleccionada = clases.find((clases)=> clases.codigo === codigo)
    return claseSeleccionada 
}

function comprar() {
    let codigo = prompt("Ingresa el código de la clase que te interesa")
    let claseElegida = consultarClases (parseInt(codigo))

    // COPIAR PEGAR - CAMBIAR
    if (claseElegida !== undefined) {
        
        carrito.push(claseElegida) 
        alert(claseElegida.nombre + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas elegir otra clase?")
        if (respuesta === true) {
            comprar()                   
        } else {                       
            console.clear()             
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            console.log("El costo de tu compra es: $", subtotal, "\nMuchas gracias por ser parte de la comunidad BBB.")
        }

    } else {
        alert("Error en el código de clase ingresado.\nRefresca para comenzar de nuevo.")
    }
}

function eliminarProdDelCarrito() {
    // carritoAlt

    console.clear()
    console.table(carritoAlt)

    let cod = prompt("Ingresa el código de la clase que ya no quieres realizar:")
    let indice = carritoAlt.findIndex((clase)=> clase.codigo === parseInt(cod))

    if (indice !== -1) {
        carritoAlt.splice(indice, 1)
        console.table(carritoAlt)
    }
}