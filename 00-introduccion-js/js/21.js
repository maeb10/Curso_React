// Ternarios
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

// auth ?
//     console.log('Usuario autenticado'):
//     console.log('No autenticado, ir a login')

saldo > pagar || tarjeta ?
    console.log('Si puedes pagar') :
    console.log('No, no puedes pagar');