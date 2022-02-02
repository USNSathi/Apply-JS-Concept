
// Normal way

/*
for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}
*/

// With function


//How many numbers are divisible by 3

/*
function countNumbersdivisibleByThree() {
    let count = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0) {
            count = count + 1;
        }
    }
    return count;
}

let result = countNumbersdivisibleByThree();
console.log(result);
*/

//Average of all the numbers that is divisible by 3
// Equation (average = sum/n;)

function averageNumbersdivisibleByThree(n) {
    let sum = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
            count = count + 1;
        }
    }
    let average = sum / count;
    return average;
}
let result = averageNumbersdivisibleByThree(100);
console.log(result);