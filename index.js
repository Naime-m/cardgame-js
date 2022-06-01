let player = {
    name: "Naime",
    points: 10
}
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : " + player.points + " points"
function randomCard() {
    let randomNum = Math.floor( Math.random()*13 ) + 1

    if (randomNum >10) {
        return 10 
    } else if ( randomNum === 1) {
            return 11   
    } else { 
    return randomNum
    }
} 


function startGame() {

isAlive = true
let firstCard = randomCard()
let secondCard = randomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
renderGame()
}

function renderGame() {

cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
}
