// Yahtzee

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