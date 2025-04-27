let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
// Added in an array to hold all the card numbers drawn
const cards = [firstCard, secondCard]
let newDraw = 0

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    // // Display just first two cards
    // cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
    // // Using the array
    cardsEl.textContent = `Cards: ${cards}`
}

function newCard() {

    newDraw = 5
    cards.push(newDraw)
    sum += newDraw
    renderGame()
}





// while (sum < 21 ) {
//     if (sum <= 20) {
//     const draw = true //prompt("Would you like to draw another card? 🙂  Y / N  ")
//     if (draw.toUpperCase) {
//         newDraw = Math.floor(Math.random() * 12) + 2
//         sum += newDraw
//         console.log(sum)
//     }
    
// }
// // double equals will ignore data type (string/int) triple equals however is stricter and will only compare ints to ints etc
// else if (sum === 21) {
//     console.log("Congrats you've won! 🥳")
//     hasBlackJack = true
// }
// else {
//     console.log("Oh bad luck, that's a bust. 😭")
// }
// }