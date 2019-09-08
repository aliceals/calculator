//create empty array to store entries
var entries = [];

//create total variable and set to 0
var total = 0;

//create temp variable and set to empty string
var temp = '';

//on click of button run function and turn variable val into the text of the button clicked
$("button").on('click', function () {
    var val = $(this).text();

    // Got a number, add to temp. Check if it is a number then add val to the temp variable
    if (!isNaN(val) || val === '.') {
        temp += val;
        $("#answer").val(temp.substring(0, 10));

        // Got some symbol other than equals, add temp to our entries
        // then add our current symbol and clear temp
        //check if value is AC then clear temp to nothing
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        $("#answer").val('')

        // Check if val is CE. If so clear clear last entry
    } else if (val === 'CE') {
        temp = '';
        $("#answer").val('')

        // if value is equal to x then add multiply symbol to work with eval
    } else if (val === 'x') {
        entries.push(temp);
        entries.push('*');
        temp = '';

        // if value is equal to divide. Then Change divide symbol to work with eval
    } else if (val === '÷') {
        entries.push(temp);
        entries.push('/');
        temp = '';

        // If value is equal to the equals sign then perform calculation
    } else if (val === '=') {
        entries.push(temp);

        //run through array of entries and do the calculation as numbers and symbols come up. 
        //If value is a symbol then use symbol and go onto next number

        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i + 1])
            var symbol = entries[i];

            if (symbol === '+') { nt += nextNum; }
            else if (symbol === '-') { nt -= nextNum; }
            else if (symbol === '*') { nt *= nextNum; }
            else if (symbol === '/') { nt /= nextNum; }

            i++;
        }

        // Swap the '-' symbol so text input handles it correctly
        if (nt < 0) {
            nt = Math.abs(nt) + '-';
        }

        $("#answer").val(nt);
        entries = [];
        temp = '';

        // Push number
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
});