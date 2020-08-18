// https://codepen.io/nashidc/pen/mdPEXeP


//collects user data through prompts

let weeklyIncome = parseInt(prompt("How much income do you earn in a week?"));
let foodCost = parseInt(prompt("How much do you spend on food every week?"));
let housingCost = parseInt(prompt("How much is your rent weekly?"));
let transportationCost = parseInt(prompt("How much do you spend on transportation every week?"));
let otherCost = parseInt(prompt("How much are other weekly expenses"));

let yearlyGoal = parseInt(prompt("How much would you like to save this year?"));

// how much they can save each week

let weeklyGoal = yearlyGoal / 52;
console.log(`With your current weekly salary you have to save $${weeklyGoal.toFixed(2)} every week to meet your yearly savings goal`)

// total weekly costs

let totalCost = housingCost + foodCost + transportationCost + otherCost;
let leftover = weeklyIncome - totalCost;

// determine whether they need to save more or are on track

if (leftover > weeklyGoal) {
    console.log("Good Job. Looks like you're on track to meet your yearly goal!")
} else{
    console.log(`Oh no! You will need to save $${(weeklyGoal - leftover).toFixed(2)} to make up for it.`)
}
