
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// 3rd = 2nd + 1st
// 4th = 3rd + 2nd
// 5th = 4th + 3rd
// nth = (n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th

// With normal way

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // ith = (i - 1)th + (i - 2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo);

// With function

// function fibonacciSeries(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         // ith = (i - 1)th + (i - 2)th
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(13);
// console.log(fiboSeries);

// Input validation/ Error handaling

function fibonacciSeries(num) {

    console.log(typeof num);
    if (typeof num != 'number') {
        return 'Please give a number';
    }
    if (num < 2) {
        return "Please enter a positive number grater then 2";
    }

    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        // ith = (i - 1)th + (i - 2)th
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);