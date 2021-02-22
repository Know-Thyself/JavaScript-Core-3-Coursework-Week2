let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFacts);

function getFacts() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
        if(number !== "") {
            fact.classList.remove('d-none');
            factText.innerHTML = data;
        }
    })
    .catch(err => console.error(err));  
}