
// Normal Way

// Between Two

// const business = 450;
// const minister = 350;
// if (business > minister) {
//     console.log("Business person is Big");
// }
// else {
//     console.log("Minister person is Big");
// }

// Among Three

// const business = 450;
// const minister = 350;
// const army = 600;

// if (business > minister && business > army) {
//     console.log("Business person is Big");
// }
// else if (minister > business && minister > army) {
//     console.log("Minister person is Big");
// }
// else {
//     console.log("Army person is Big");
// }

// With Math

// var max = Math.max(business, minister, army);
// console.log("Big is", max);

// With function

// Between Two

function findBig(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const big = findBig(354, 241);
console.log("Big is", big);