// Yahtzee

// NOT WORKING

/*
const arraySize = prompt('Enter the number of players'); 

const array1 = [arraySize];
for (var i = 0; i < +array1.length; i++)
{
  prompt("enter the name of player " + i);
  console.log(array1[i]);
}

// for..in loop
for (var player in array1)
{
  console.log(player);
}
*/


// NOT WORKING TOO
/*
const listOfUsers = (list: any[], process: any): any[] => {
  
  let results = []
  let array1 = [prompt('Enter the number of players')];
  for (let i = 0; i < array1; i++) {
    const processed = process(list[i])
    results.push(processed)
  }
  return results
}

*/

//trial with map function:


//ALSO THIS DOESN'T WORK
/*
type transformFunc<A,B> = (arg: A)=>B

const map = <A,B> (list: A[], transform: transformFunc<A, B>): B[] => {
   let results = []
  let array1 = [prompt('Enter the number of players')];
  for (let i = 0; i < array1.length; i++) {
    const processed = transform(list[i])
    results.push(processed)
  }
  return results
}
*/







// 17  ottobre progressi:

/*

const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

const throwDie = ():number => Math.trunc(Math.random()*6) + 1

// mycode

const arraySize = Number.parseInt(prompt('Enter the number of players') ?? "0"); // convert into a number the character digited as input

// checks whether the type is not a number or the type is a string 

if (arraySize <= 0 || isNaN(arraySize)){
    console.log("is not a number or there cannot be zero players")
}
const players:string[] = [];
for (var i = 0; i < arraySize; i++)
{
  console.log(players[i] = prompt("enter the name of player " + i) ?? " ");
}
// for..in loop
for (var player in players)
{

  // I HAVE TO CREATE AN ARRAY THAT CONTAINS CHE COLOURS

  console.log("the player called " + i + "has colour " ?? " ")
   console.log(`type anything to throw a die, or ${BgRed}'exit'${Reset} to quit`)

 const command: string = prompt() ?? ""

  if (command == 'exit') {
    console.log(`${BgGreen}See you next time!${Reset}`)
  } else {
    const die = throwDie()
    console.log(`you threw: ${BgBlue} ${die} ${Reset}`)
  console.log(player);
}
}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
20th October: fixed problem about array added method that throws a dice

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

const throws = (): void => {
  const command: string = input(" ") ?? ""
  //count players
    for (let i = 0; i < createPlayers.length; i++) {
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
*/