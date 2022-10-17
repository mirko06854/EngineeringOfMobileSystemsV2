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

*/