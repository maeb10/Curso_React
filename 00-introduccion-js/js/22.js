// Optional Chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programación 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1);

console.log('DESPUES de alumnos');

// Nullish coalescing operator (??)
const pagina = null ?? 1
console.log(pagina);