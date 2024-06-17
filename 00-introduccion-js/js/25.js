// Fetch API con Promises
const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Hubo un error...')
    })
    .then(json => console.log(json))
    .catch(error => console.log(error.message))