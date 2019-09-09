
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
    btnNumbers[i].addEventListener("click", updateDisplayVal)
}

for (i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", updateDisplayVal)
}


function updateDisplayVal(e) {

    var btnText = e.target.value;
    console.log(btnText);
    if (currentValue === '0') {
        currentValue = '';
    }
    currentValue += btnText;
    display.innerText = currentValue;
}





