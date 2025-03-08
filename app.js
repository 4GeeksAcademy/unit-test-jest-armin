const sum = (a,b) =>{
    return a + b
}

console.log(sum (7,3));

// module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    const conversionDollarToyen = 156.5;
    return dollars * conversionDollarToyen;

}
function fromEuroToDollar(euro) {
    const conversionEuroDollar = 1.07;
    return euro * conversionEuroDollar;

}
function fromYenToPound(yenes) {
    const conversionYenPound = 0.87;
    return yenes * conversionYenPound;

}


console.log(fromDollarToYen(20))
console.log(fromEuroToDollar(20))
console.log(fromYenToPound(20))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }
