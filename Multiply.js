
// Normal Way

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const multiplication = multiply(2, 3);
console.log(multiplication);


// Component calculate

// chairwood = 3cft/chair
// tablewood = 10cft/table 
// bedwood = 50cft/bed 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // Wood Calculation

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);