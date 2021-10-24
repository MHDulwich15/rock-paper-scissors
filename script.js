let iteration = 0
let playerScore = 0
let computerScore = 0

function computerPlay() {
  const computerPossibleChoices = ["ROCK", "PAPER", "SCISSORS"]
  let computerChoice = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "It's a draw!"
  }
  else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore++
    return "You lose, Paper beats Rock."
  }
  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++
    return "You win, Rock beats Scissors."
  }
  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++
    return "You win, Paper beats Rock."
  }
  else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "It's a draw!"
  }
  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++
    return "You lose, Scissors beat Paper."
  }
  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++
    return "You lose, Rock beats Scissors."
  }
  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++
    return "You win, Scissors beat Paper."
  }
  else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "It's a draw!"
  }
  else {
    return "Uh oh, something went wrong. Try again."
  }
}

function game () {
  alert("Welcome to Rock, Paper, Scissors. This game is played from the console, which you can view by pressing Ctrl+Shift+I and navigating to the Console tab. Each game consists of 5 rounds, and the winner will be declared at the end.")
  while (iteration < 5) {
    let playerChoice = prompt("Enter your choice: Rock, Paper or Scissors").toUpperCase()
    if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
      console.log(playRound(playerChoice, computerPlay()))
      iteration++
    }
  }
  displayWinner()
  playAgain()
}

function displayWinner()
{
  console.log("Your final score was " + playerScore)
  console.log("The computers final score was " + computerScore)
  if (playerScore > computerScore) {
    console.log("You won the game!")
    alert("You won the game!")
  }
  else if (playerScore < computerScore) {
    console.log("The computer won the game!")
    alert("The computer won the game!")
  }
  else if (playerScore === computerScore) {
    console.log("The game was a draw!")
    alert("The game was a draw")
  }
  else {
    console.log("There was an error calculating the winner.")
    alert("There was an error calculating the winner.")
  }
}

function playAgain() {
  let playAgain = confirm("Do you want to play again?")
  if (playAgain) {
    location.reload()
  }
  else {
    return
  }
}

game()
