const productos = [
    {
        nombre: "Zudenina",
        precio: 300,
        existencia: 40,
    },

    {
        nombre: "BiosPG",
        precio: 80,
        existencia: 35,
    },

    {
        nombre: "Acetaminofen",
        precio: 30,
        existencia: 70,
    },

    {
        nombre: "VitaminaC",
        precio: 150,
        existencia: 60,
    },
]


const listaNombreProductos = productos.map(producto => {
    return `${producto.nombre}`;
})


const productosPrecioMenor = productos.filter(producto => {
    if (producto.precio < 300)
    return producto.nombre;
})


productos.push({
        nombre: "BiosPS",
        precio: 80,
        existencia: 30,
})


const listaFormatoProductos = productos.map(producto => {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio} - Existencia: ${producto.existencia}`;
})


const products = productos.map(producto => {
    if (producto.existencia >= 1 && producto.nombre === "Acetaminofen")
     return producto.precio = 35;
})


const totalInventario = productos.map(producto => {
        return `Nombre: ${producto.nombre} - Total Inventario: ${producto.precio * producto.existencia}`;

})


console.log(productos);
console.log(listaNombreProductos);
console.log(productosPrecioMenor);
console.log(listaFormatoProductos);
console.log(totalInventario);