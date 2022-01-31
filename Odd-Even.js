
// Normal Way

// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);

// With Function

// Is Even Function

const number = 145;

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', isHerNumberEven);

// Is Odd Function

function isOdd(number) {
    // if (number % 2 == 1) {
    //     return true;
    // }
    // return false;
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('is her number odd', isHerNumberOdd);
