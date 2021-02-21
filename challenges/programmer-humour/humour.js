fetch("https://xkcd.now.sh/?comic=latest")
.then(function(response){
    return response.json()
})
.then(function(data) {
    let humourousImage = document.querySelector('.humourous-image');
    humourousImage.src = data.img;
})
.catch(error => {
    console.error(error);
})