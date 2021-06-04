
document.addEventListener('DOMContentLoaded', () => {
    let movies = document.getElementsByClassName('image-class')
    Array.from(movies).forEach(movie => {
        // THIS GET'S THE MOVIE ID IN ORDER TO MAKE THE IMAGE REDIRECT TO IT'S MOVIE PATH
        movie.addEventListener('click', event => {
            window.location.replace(`/movies/${movie.getAttribute('class').slice(12)}`)
        })
    })
})
