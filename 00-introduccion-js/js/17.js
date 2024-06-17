const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const numeros = [10, 20, 30]

// Filter
const nuevoArray = tecnologias.filter(tech => tech !== 'HTML')
// console.log(nuevoArray);

const nuevoArray2 = numeros.filter(num => num > 10)
// console.log(nuevoArray2);

// Includes
const resultado = tecnologias.includes('CSS')
// console.log(resultado);

// Some - Devuelve si al menos uno cumple la condición
const resultado2 = numeros.some(numero => numero > 15)
// console.log(resultado2);

// Find - Devuelve el primer elemento que cumple una condición
const resultado3 = numeros.find(numero => numero > 15)
// console.log(resultado3);

// Every - Retorna true o false si todos cumplen la condición
const resultado4 = numeros.every(numero => numero > 15)
// console.log(resultado4);

// Reduce - Retorna un acumulado del total
const resultado5 = numeros.reduce((total, numero) =>  total + numero, 0)
console.log(resultado5);