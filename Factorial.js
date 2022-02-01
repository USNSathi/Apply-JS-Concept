
// 4! = 4 X 3 x 2 x 1
// 5! = 5 x 4 x 3 x 2 x 1

// Normal Way

// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     console.log(i);

//     factorial = factorial * i;
// }
// console.log(factorial);

// With function

// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log("Factorial of 7 is", firstFactorial);

// While loop

function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);