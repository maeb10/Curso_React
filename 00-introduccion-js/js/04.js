// Objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

console.log(typeof producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.otro);

// Destructuring
const {nombre, precio, disponible} = producto;
console.log(nombre, precio, disponible);

// object literal enhacement
const autenticado = true;
const usuario = 'Juan';

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto);