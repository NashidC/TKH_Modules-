//https://codepen.io/nashidc/pen/VwajQqm
let quote =
  "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,";

let splitQuote = quote.split(" ");
let newQuote = [];

for (let i = 0; i < splitQuote.length; i++) {
  let splitLetters = splitQuote[i].split("");
  for (let c = 0; c < splitLetters.length; c++) {
    if (splitLetters[c] === "s" || splitLetters[c] === "S") {
      splitLetters[c] = "$";
    }
  }
  let transformedQuote = splitLetters.join("");
  newQuote.push(transformedQuote);
}
console.log(newQuote.join(" "));
