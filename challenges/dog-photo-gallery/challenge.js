
let randomDogImages = document.querySelector('.random-dog-images');
randomImageButton = document.querySelector('.random');

randomImageButton.addEventListener('click', getRandomImage);

function getRandomImage () {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        randomDogImages.src = data.message;
    })
    .catch(error => {
        console.error(error);
    })
}
   