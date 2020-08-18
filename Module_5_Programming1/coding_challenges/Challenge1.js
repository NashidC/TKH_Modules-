// https://codepen.io/nashidc/pen/rNeLJpR

let fullNames = [
    "Westly Snipes",
    "Nicholas Cage",
    "Nasir Jones",
    "Sean Carter",
    "Sean Combs",
    "Michael Jordan",
    "Patrick Ewing"
];

let firstNames = [];
let lastNames = [];


    for (i = 0; i < fullNames.length; i++) {
        let splitName = fullNames[i].split(" ");
        firstNames.push(splitName[0]);
        lastNames.push(splitName[1]);
    }

console.log(firstNames);
console.log(lastNames);
