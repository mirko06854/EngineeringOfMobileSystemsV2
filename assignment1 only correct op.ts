// Yahtzee


//teacher example as start code:

/*

// this is a library we need, to read text input "easily"
import prompt from 'prompt-sync'

const input = prompt();

// these are some codes to get the console to print in colors
// see more details here:
// https://bit.ly/3T8YcDQ
const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

const throwDie = ():number => Math.trunc(Math.random()*6) + 1

// this is a small example to show how the pieces fit together
const example = ():void => {
  // how to print with colors
  console.log(`type anything to throw a die, or ${BgRed}'exit'${Reset} to quit`)
  // how to get user input
  const command: string = input()
  if (command == 'exit') {
    console.log(`${BgGreen}See you next time!${Reset}`)
  } else {
    const die = throwDie()
    console.log(`you threw: ${BgBlue} ${die} ${Reset}`)
    example()
  }
}

example()

*/



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
  console.log(player);
}