
const handleClick = () => {
    // we get the star element
    let star = document.querySelector('.star')
    let image = document.createElement('img');
    let movieId = document.querySelector('.hidden')
    let data = {'movieId' : movieId.value}

    if(star.className.includes('blank')){
        // we are renaming the element with the class that includes 'blank' to just 'start'
        // and then we add the gold class to it
        star.className = 'star'
        star.className += ' gold'
        image.src = '/images/goldstar.png'
        // we remove the current image and apply the new image
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
        // in the case that the class doesn't include blank (it has the gold class)
        // then we rename and add the class name 'blank'
        star.className = 'star'
        star.className += ' blank'
        image.src = '/images/blankstar.png'
        // we remove the current image and apply the new image

        star.removeChild(star.firstChild);
        star.appendChild(image)
        // we are sending a put request with the movieId data.
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
