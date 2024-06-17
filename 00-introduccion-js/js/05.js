// Objetos - Manipulación

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

// No permite modificar, agregar ni eliminar propiedades
// Object.freeze(producto)
// No permite agregar ni eliminar propiedades
// Object.seal(producto)

// Reescribir valor
producto.disponible = true

// Si no existe, la va añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio

console.log(producto)