
var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
//select element that holds input and result
var display = document.getElementById("display");
//select the buttons 0-9
var btnNumbers = document.getElementsByClassName("btn--number");
//select operators
var btnOperators = document.getElementsByClassName("operator");


//create three variables. One to hold create value, one to hold pending value and one to hold array to be eval
var currentValue = 0;
var pastValues;
var arrayEval = [];

//add event listeners to buttons 

for (i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", updateDisplayVal);
    btnNumbers[i].addEventListener("click", performOperation)
}

for (i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", updateDisplayVal);
    btnOperators[i].addEventListener("click", performOperation)

}

//get value from buttons
function updateDisplayVal(e) {

    var btnText = e.target.value;
    console.log(btnText);
    if (currentValue === '0') {
        currentValue = '';
    }
    currentValue += btnText;
    display.innerText = currentValue;
}



//function to do calculation
//add all buttons to the array

function performOperation(e) {
    var operator = e.target.value;
    debugger;
    if (operator === '+') {
        arrayEval.push('+');
        display.value = "+"
    } else if (operator === '-') {
        arrayEval.push('-');
        display.value = "-"
    } else if (operator === '/') {
        arrayEval.push('/')
        display.value = "/"
    } else if (operator === 'x') {
        arrayEval.push('*')
        display.value = "x"
    } else if (operator === '.') {
        arrayEval.push('.')
        display.value = "."
    } else if (operator === '1') {
        arrayEval.push(1)
        display.value = "1"
    } else if (operator === '2') {
        arrayEval.push(2)
        display.value = "2"
    } else if (operator === '3') {
        arrayEval.push(3)
        display.value = "3"
    } else if (operator === '4') {
        arrayEval.push(4)
        display.value = "4"
    } else if (operator === '5') {
        arrayEval.push(5)
        display.value = "5"
    } else if (operator === '6') {
        arrayEval.push(6)
        display.value = "6"
    } else if (operator === '7') {
        arrayEval.push(7)
        display.value = "7"
    } else if (operator === '8') {
        arrayEval.push(8)
        display.value = "8"
    } else if (operator === '9') {
        arrayEval.push(9)
        display.value = "9"
    } else if (operator === '0') {
        arrayEval.push(0)
        display.value = "0"
    } else if (operator === "=") {
        var evaluation = eval(arrayEval.join(""));
        display.value = evaluation;
        arrayEval = [];
        arrayEval.push(evaluation);
    }
    console.log(arrayEval);

}


clear.onclick = () => {
    currentValue = "0";
    pastValues = undefined;
    arrayEval = [];
    display.value = 0;
}





