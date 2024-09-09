const sumAll = function(num1, num2) {
    let givenNumbers = [];


    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 > num2) {
        let tempNum = num2;
        num2 = num1;
        num1 = tempNum;
    }

    for (i = num1; i <= num2; i++) {
        givenNumbers.push(i);
    }


    let sum = 0;

    for (let j = 0; j < givenNumbers.length; j++) {
        sum += givenNumbers[j];
    }
    
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
