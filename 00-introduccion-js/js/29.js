// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'un nuevo valor...'
inputNombre.dataset.nombre = 'input'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')