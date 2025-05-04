
// Added in an array to hold all the card numbers drawn - as I want this to be amendable, I don't want this to be a const
let cards = []

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// JS object
// Idelaly this would be held in session state and reloaded whenever user logs in again, 
// but this does not yet have loging functionality, so is hard coded for now
let player = {
    name : "Hannah",
    chips : 145 
}

let playerEl = document.getElementById("player-el")
playerEl.innerText = `${player.name} : $${player.chips}`

function startGame() {
    cards = []    
    sum = 0
    // Should not be alive until game is started
    isAlive = true
    hasBlackJack = false
    console.log(isAlive, hasBlackJack)
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard

    cards.push(firstCard, secondCard)
    renderGame()
}

function renderGame() {
    console.log(`rendergame = ${isAlive}, ${hasBlackJack}`)
    //while (!hasBlackJack && isAlive) {
        sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        console.log(`rendergame = ${isAlive}, ${hasBlackJack}`)
    } else {
        message = "You're out of the game!"
        isAlive = false
        console.log(`rendergame = ${isAlive}, ${hasBlackJack}`)
    }
    messageEl.textContent = message
    // // Display just first two cards
    // cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`

    // // // Using the array (this one is the easiest to display but has commas)
    // cardsEl.textContent = `Cards: ${cards}`

    // Using an array and for loop
    // Need to redefine the start each time, or array will duplicate old cards each time
    cardsEl.textContent = "Cards: "

    for (let i = 0; i<cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
   // }
    
}

function newCard() {
    if (isAlive) {
        let newDraw = getRandomCard()
        cards.push(newDraw)
        sum += newDraw
        renderGame()
    }
    else {
        messageEl.textContent = "Please start a new game using the START GAME button."
    }

}

function getRandomCard() {
    let cardValue = Math.floor(Math.random() * 10) + 2
    return cardValue
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