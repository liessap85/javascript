// //  ASSIGNMENT ONE: CREATE AN OPBJECT & INBUILT FUNC (method)


// let person = {
//     givenName : "Hannah",
//     age : 39,
//     country : "UK",
//     logData : function() {
//         console.log(`${this.givenName} is ${this.age} years old and lives in ${this.country}`)
//     }
// }

// person.logData()


// //------------------------------------------------------------------------------------------------

// // ASSIGNMENT TWO: If Else for ages and bus tickets

// let age = 67
// let discount = "none - full price"

// function fareChecker (age) {
//     if (age > 66) {
//         discount = "senior citizen discount"
//     }
//     else if (age >17 && age <27) {
//         discount = "student discount"
//     }
//     else if (age>5 && age <18) {
//         discount = "child discount"
//     }
//     else if (age < 6) {
//         discount = "free"
//     }
//     return(`The discount available for this passenger is:  ${discount}`)
// }

// console.log(fareChecker(age))

// //------------------------------------------------------------------------------------------------

// // ASSIGNMENT THREE: push pop, shift & unshift 
// // Tuvalu and Monaco are teeny tiny, China and Pakistan should be in their place!

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // Pop to remove final element
// largeCountries.pop()
// console.log(largeCountries)

// // Push to add element to end of array
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// // Shift to remove first element
// largeCountries.shift()
// console.log(largeCountries)

// // Unshift to add element to start of array
// largeCountries.unshift("China")
// console.log(largeCountries)


// //------------------------------------------------------------------------------------------------

// // ASSIGNMENT FOUR: Rock Paper Scissors

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function pickYourWeapon() {
    let choice = Math.floor(Math.random()*3)
    return hands[choice]
}

console.log(pickYourWeapon())