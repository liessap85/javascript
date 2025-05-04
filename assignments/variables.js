// // Assignment ONE

// // Create two variables, firstName and lastName
// let firstName = "Hannah"

// let lastName = "Cheetham"

// // Concatenate the two variables into a third variable called fullName
// // Use backticks to indicate string formatting
// let fullName = `${firstName} ${lastName}`  


// // Log fullName to the console
// console.log(fullName)

// //------------------------------------------------------------------------------------------------

// // Assignment TWO

// let name = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi there, Linda!" when called

// function welcome(a, b) {
//     msg = `${b}, ${a}!`
//     console.log(msg)
//     // // Could also have the function return a value
//     // return msg
// }

// // Functions just need to be called
// welcome(name, greeting)

// // // Could also have the function return a value
// // console.log(welcome(name, greeting))


// // Functions can be sync or async, if async we need to use something like a Promise.

// //------------------------------------------------------------------------------------------------

// // Assignment THREE

// let myPoints = 3

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// add3Points()
// remove1Point()
// add3Points()
// remove1Point()
// remove1Point()


// // Call the functions to that the line below logs out 10
// console.log(myPoints)

// //------------------------------------------------------------------------------------------------

// // Assignment FOUR

// // Try to predict what each of the lines will log out
// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // "My points: 59"  // A string will always beat an int (even when two ints are added together)
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114"


// //------------------------------------------------------------------------------------------------

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// // pop does not need any arguments, will always just do the last item
// messages.pop()
// console.log(messages)

// //------------------------------------------------------------------------------------------------


const badNums = [11, 12, 13]

for (i=0; i<25;i++) {
    let cardPull = Math.floor( Math.random()*13 ) + 1
    if (cardPull == 1) {
        cardPull = 11
    }
    // If card is in array
    else if (badNums.includes(cardPull)) {
        console.log("badNum" + cardPull)
        cardPull = 10
    }
    console.log(cardPull)
 }



