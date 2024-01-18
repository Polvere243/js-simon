// recupero gli elementi dalla pagina
const titleElement = document.querySelector("h1");
const listOfNumbers = document.getElementById("numbers");
const answersField = document.getElementById("answers");
const scoreElement = document.getElementById("score-message"); 
const countdownElement = document.getElementById("countdown"); 
const button = document.getElementById("button");

// informazioni iniziali
const numbersToGenerate = 5;
const min = 1;
const max = 100;
let seconds = 30;

// genero un titolo dinamico 
titleElement.innerText = `Memorizzali! Hai solo ${seconds} secondi.`;

// invoco la funzione per generare un numero casuale
const numbers = getRandomNumber (min, max, numbersToGenerate);
// inietto i numeri nell'ul e genero gli input
let items = "";
for (let number of numbers) {
    items += `<li>${number}</li>`;
    let input = ``;
let inputFields += `<input type="number" min="${min}" max="${max}" required>`
}

listOfNumbers.innerHTML = items;
answersField.innerHTML = inputFields;

// mostro il countdwon in pagina
countdownElement.innerText = seconds;
const countdown = setInterval (() =>{
    countdownElement.innerText = --seconds;
    if (seconds === 0){
        clearInterval(countdown);
        formSection.classList.remove("d-none");
        listSection.classList.add("d-none");
        countdown = clearInterval();
    }

}, 1000)
// aggiungo un titolo alla section cogli input
formTitle.innerText = "Scrivi i numeri che ricordi."
// recupero tutti gli input
const inputs = document.querySelectorAll("input");

answersField.addEventListener ("submit", confirm);



