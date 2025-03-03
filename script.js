let calculatorDisplay = document.querySelector("#calculatorDisplay");
let input = document.querySelector(".buttons");
let solveMode = 0;
let questionList = ["x+5=10, what is x?", "ABD = 65 degrees,  DBC is adjacent to angle ABD, ABC=strt angle, ?=DBC","x*24=48, what is x"]; //array for solve mode 
let questionIndex = 0;
let answerList = ["5", "115", "2"];
const enter = document.querySelector(".enter");
const clear = document.querySelector(".clear");
const solve = document.querySelector(".solve");
const number = document.querySelector(".numbers");
const operation = document.querySelector(".operations");
const end = document.querySelector(".end");
// making the input into a calculation 
let calculateInput  = (event) => {
    let clickedButton = event.target;

  //  button being clicked and grabbing value
  if (clickedButton.tagName === "BUTTON") {
    // Checks if the button is inside the two classes
    if (clickedButton.closest(".numbers") || clickedButton.closest(".operations")) {
       //converting operations i put into valid ones
        let operationChange = clickedButton.textContent;
        operationChange = operationChange.replace("÷", "/");
        operationChange = operationChange.replace("^", "**"); 
      
        calculatorDisplay.textContent += operationChange;
    }}};

input.addEventListener("click", calculateInput);  //adding click activated display 
//clearing anything the user inputs 
clear.addEventListener('click', () => {
     calculatorDisplay.textContent = "";
});




enter.addEventListener("click", () => {
    enter.addEventListener("click", () => {
        if (solveMode === 0) {
            // Normal calculation mode
            try {
                calculatorDisplay.textContent = eval(calculatorDisplay.textContent);
            } catch (error) {
                calculatorDisplay.textContent = 'Error';
            }
        } else {
            // Solve mode calculations
         
            let userAnswer = calculatorDisplay.textContent;
            if (userAnswer === answerList[questionIndex]) {
                questionIndex++;
                if (questionIndex <= questionList.length) {
                    calculatorDisplay.textContent = questionList[questionIndex];
                    alert("Correct!");
                    setTimeout(() => { 
                        calculatorDisplay.textContent = ""; 
                    }, 10000); // Clear after 10 sec
                } else {
                    alert("all questions done");
                    solveMode = 0;
                    calculatorDisplay.textContent = "";
                }
            } else {
                alert("wrong");
                calculatorDisplay.textContent = "";
            }
        
}})});
function appendValue(value) {
    calculatorDisplay.textContent += value;
}

solve.addEventListener('click', () => {    //enters solve mode 
    alert("wait for question to clear before answering")
    solveMode = 1;
    questionIndex = 0;
    calculatorDisplay.textContent = questionList[questionIndex];
    setTimeout(() => { calculatorDisplay.textContent = ""; }, 10000); // Clears question after 10 sec

});

//ends the solve mode 
end.addEventListener('click', () => {  
    alert("u have ended solve mode");
    if (solveMode === 1) {
        solveMode = 0;
        calculatorDisplay.textContent = "";
    }
});