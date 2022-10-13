// Yahtzee

// NOT WORKING

/*
const array1 = [prompt('Enter the number of players')];
for (var i = 0; i < array1.length; i++)
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