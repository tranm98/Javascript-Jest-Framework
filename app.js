// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return parseFloat(valueInDollar.toFixed(2)); // round to 2 decimal places
}


const fromDollarToYen = (valueInYen) => {
    let valueInDollar = valueInYen * 0.0074;
    return valueInDollar;
}

const fromYenToPound = (valueInPound) => {
    let valueInYen = valueInPound * 0.006;
    return valueInYen;
}

const sum = (a, b) => {
    return a + b
}

// export all functions in a single module.exports statement
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

//one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//one dollar is:
let oneDollarIs =  {
    "JPY": 134.12, //japan yen
    "GBP": .8, //bristish pound
    "EUR": 0.91, //euro
}

//one yen is:
let yen = {
    "GBP": 0.006, //Birtish Pound
    "EUR": 0.0068, //Euro
    "USD": 0.0074, //Us Dollar
}
