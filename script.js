let calculatorDisplay = document.querySelector(".display");
let input = document.querySelector(".buttons");
let solveMode = 0;
let answer = document.querySelector(".answer");

// making the input into a calculations
let calculateInput  = () => {
    input.addEventListener('click', (event) => { calculatorDisplay  //adding click activated display 
        calculatorDisplay.textContent = event.target.textContent; // saves the value when button is clicked
        answer.textContent = input 
})}     

