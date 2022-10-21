import prompt from 'prompt-sync'
const input = prompt();


const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

const throwDie = (): number => Math.trunc(Math.random() * 6) + 1

// mycode

interface Player {
  name :string,
  colour :string
}

const arraySize = Number.parseInt(input(' Enter the number of players ') ?? "0"); // convert into a number the character digited as input

// checks whether the type is not a number or the type is a string 

if (arraySize <= 0 || isNaN(arraySize)) {
  console.log("is not a number or there cannot be zero players")
}

const inOrderColour = (ncolours: number): string => {
  const colours: string [] = [BgYellow, BgBlue, BgMagenta, BgCyan, BgWhite];
  return colours[ncolours];
}

const createPlayers = (nplayers: number): Player[] => {
    const players: Player[] = [];
    for (let i = 0; i < nplayers; i++) {
        const playername = input("enter the name of player " + i) ?? " "
        const playercolour = inOrderColour(i)
        const player:Player = {name: playername,colour: playercolour};
        players[i] = player;
    }
    return  players
}

console.log(createPlayers(arraySize))



// for..in loop
for (let player in players) {

  console.log(`type anything to throw a die, or ${BgRed}'exit'${Reset} to quit`)

  // I HAVE TO CREATE AN ARRAY THAT CONTAINS CHE COLOURS
  const colours: string[] = [BgYellow, BgBlue, BgCyan, BgMagenta, BgYellow, BgWhite];
  for (let colour = 0; colour < colours.length; colour++) {
    console.log("the player called " + i + " has colour " + colours[Math.random() * 5] ?? " ")
  }

  {
    const command: string = input(" ") ?? ""

    if (command == 'exit') {
      console.log(`${BgGreen}See you next time!${Reset}`)
    } else {
      const die = throwDie()
      console.log(`you threw: ${BgBlue} ${die} ${Reset}`)
      console.log(player);
    }
  }
}


/* REVIEW AND NEW METHODS 21 OCTOBER


import prompt from 'prompt-sync'
const input = prompt();


const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

//const throwDie = (): number => Math.trunc(Math.random() * 6) + 1

// mycode

interface Player {
  name: string,
  colour: string
}
const throwDie = (): number => Math.trunc(Math.random() * 6) + 1
const arraySize = Number.parseInt(input(' Enter the number of players ') ?? "0"); // convert into a number the character digited as input

// checks whether the type is not a number or the type is a string 

if (arraySize <= 0 || isNaN(arraySize)) {
  console.log("is not a number or there cannot be zero players")
}

const inOrderColour = (ncolours: number): string => {
  const colours: string[] = [BgYellow, BgBlue, BgMagenta, BgCyan, BgWhite];
  return colours[ncolours];
}

const createPlayers = (nplayers: number): Player[] => {
  const players: Player[] = [];
  for (let i = 0; i < nplayers; i++) {
    const playername = input("enter the name of player " + i + " ") ?? " "
    const playercolour = inOrderColour(i)
    const player: Player = { name: playername, colour: playercolour };
    players[i] = player;
  }
  return players
}
  if (arraySize <= 5)
    console.log(createPlayers(arraySize))
  else
    console.log("the maximal number of players is 5, so insert a smaller number!")

// write a function that throws 5 dice
const throwDiceFunction = (nDice: number): number [] => {
  
}

// function that show the values of the dice 
const printValues = (diceList :number[]): string => {
  
}

// function that asks the player which dice to keep
// returns either the same list (keep all dice), a smaller list, or even an empty list (rethrow all dice)
const diceKept = (dice: number[]): number[] => {
  
}

// function that throws the dice 3 times, asking the player which ones they want to keep (twice) 
const throwsandchoose = (): number[] => {
  
}

// function that asks the player how they want to use the dice that they have thrown (which combinations)
const chooseCombination = ...

// then we have the entire turn of one player
const playerTurn = ...

// function to make all the players play one turn  
  
const throws = (players: Player[]): void => {
  const command: string = input(" ") ?? ""
  //count players
    for (let i = 0; i < players.length; i++) {
      //each player throws the dice 3 times
      for (let j = 0; j < 4; j++){
        console.log(`type anything to throw a die, or ${BgRed}'exit'${Reset} to quit`)
      }
    }
    if (command == 'exit') {
      console.log(`${BgGreen}See you next time!${Reset}`)
    } else {
      const die = throwDie()
      const currentPlayer = throws()
      console.log(` threw of: ${BgBlue} ${die} ${Reset} ${currentPlayer}`)
    }
  }

throws()

*/