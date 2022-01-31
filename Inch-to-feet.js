
// Normal Way

var myInches = 132;
var feet = myInches / 12;
console.log(feet);

var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);

var naniInches = 156;
var feet = naniInches / 12;
console.log(feet);

var nanaInches = 168;
var feet = nanaInches / 12;
console.log(feet);

// With Function

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('naniInches in feet', feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('nanaInches in feet', feet);