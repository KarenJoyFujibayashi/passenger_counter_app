// ---- JQUERY SAMPLE --- //

// document.getElementById("count - el").innerText = 5


// SOLUTION //
//  ----PSEUDOCODE----- //

// 1. Initialize the count as 0
// 2. Listen for clicks on the increment btn
// 3. Increment the count variable when the btn is clicked
// 4. Change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass argurments

let count = 0
console.log(saveEl)



function increment(){
  count += 1
  countEl.textContent = count
  // console.log(count)
}


// 1. Create a function, save(), which logs out the count when its called
function save(){
    // Create a variable that both contain the count and the dash seperator
   let countStr = " " + count + " - "
    // Render the variable  in the saveEl using the innerText
    // Make sure to not delete the existing content of the paragaraph
  saveEl.textContent += countStr

  // make count start 0 again after clicking save
  countEl.textContent = 0
  count = 0
}







// TEST
//  ----- STORING IN A VARIABLE---- //

// const count = 4
// console.log(count)



// TEST
// --- CREATE A FUNCTION THAT LOGS OUT SUM OF ALL THE LAPS GIVEN BELOW ---//
// const lap1 = 34
// const lap2 = 33
// const lap3 = 36

// function lapSum() {
//   total = lap1 + lap2 + lap3
//   console.log(total)
//   // || console.log(lap1 + lap2 + lap3)
// }
// lapSum()


// TEST
// --- CREATE A FUNCTION THAT INCREMENTS THE lapsCompleted VARIABLE WITH 1
//  RUN IT 3 TIMES

// const lapsCompleted = 0

// function incrementLaps(){
//  lapsCompleted = lapsCompleted + 1
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)


// TEST
// Create a variable , messages, that stores the string : "Ypu have three new notifications"
// let message = "You have three new notifications"
// console.log(message)


// TEST
// Create a var name and greeting, name should be a string of your name
// message shoul be a string : "Hi, my name is"
// Concatenate and console log

// let name = "Karen Joy Fujibayashi"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name + "."
// console.log(myGreeting)


// TEST
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two var ( name & greeting ) that contains  your name
//  and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText
// let welcomeEl = document.getElementById("welcome-el")
// let name = "Karen Joy Fujibayashi"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// Add an emoji to the end ! 👋🏻
// Write your code below
// HINT : count = count + 1

// welcomeEl.innerText += " 👋🏻" // shortcut same as welcomeEl.innerText = welcomeEl.innerText + " 👋🏻"
