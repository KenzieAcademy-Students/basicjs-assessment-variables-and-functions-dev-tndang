// Exercise Two - Calculating your future age.
//
// You want to know how old you will be in any given year.  Create a piece of code that will computer
// your age given your birth year and a year in the future.
//
// Step One:
//    prompt() for the year the user was born.  Then prompt them for a year in the future.
//    Store both of these in descriptively named variables.
//
// Step Two:
//    Calculate the two possible ages for that year based on their inputs.
//
//    For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what
//    month it is in 2026.
//    Store the two possible ages in two different variables.
//
// Step Three:
//    Create a variable called message which describes the result.
//    "I will be either NN or NN in YYYY", substituting the values.
//
// Step Four:
//    Print your message to the browser using document.write()
//
// 👇 WRITE YOUR CODE HERE 👇

const userBirthYear = prompt("What year were you born?");
const futureYear = prompt("What year in the future would you like to compare to?");

let ageCalculation = function(birth, future) {
    let age = future - birth;
    return age;
}

let maximumAge = ageCalculation(userBirthYear, futureYear);
let minimumAge = maximumAge - 1;

const message = "You will be either " + minimumAge + " or " + maximumAge + " in " + futureYear +".";
document.write(message);