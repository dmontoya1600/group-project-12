
const handleClick = () => {
    // we get the star element
    let star = document.querySelector('.star')
    let image = document.createElement('img');
    let movieId = document.querySelector('.hidden')
    let data = {'movieId' : movieId.value}

    if(star.className.includes('blank')){
        star.className = 'star'
        star.className += ' gold'
        image.src = '/images/goldstar.png'
        star.removeChild(star.firstChild);
        star.appendChild(image)
        fetch('/favorites', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } else{
        star.className = 'star'
        star.className += ' blank'
        image.src = '/images/blankstar.png'
        star.removeChild(star.firstChild);
        star.appendChild(image)
        fetch('/favorites', {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}
const handleHover = () => {

        let star = document.querySelector('.star')
        if(star.className.includes('blank')){
            let image = document.createElement('img');
            image.src = '/images/goldstar.png'
            star.removeChild(star.firstChild);
            star.appendChild(image)
            setTimeout(function() {
             image.src = '/images/blankstar.png'
            }, 500);
        }

}
const handleLeave = () => {

        let star = document.querySelector('.star')
        if(star.className.includes('blank')){
            let image = document.createElement('img');
            image.src = '/images/blankstar.png'
            star.removeChild(star.firstChild);
            star.appendChild(image)

        }
}




// document.querySelector('.star').addEventListener('mouseenter', handleHover, false)
// // document.querySelector('.star').addEventListener('mouseleave', handleLeave, false)
document.querySelector('.star').addEventListener('click', handleClick)
