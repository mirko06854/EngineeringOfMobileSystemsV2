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

const randomColour = (): string => {
  const colours: string[] = [BgYellow, BgBlue, BgCyan, BgMagenta, BgYellow, BgWhite];
  return colours[Math.floor(Math.random() * colours.length)] 
}

const createPlayers = (nplayers: number): Player[] => {
    const players: Player[] = [];
    for (let i = 0; i < nplayers; i++) {
        const playername = input("enter the name of player " + i) ?? " "
        const playercolour = randomColour()
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