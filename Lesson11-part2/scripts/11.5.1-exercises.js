// 11o-q
let words = ['hello', 'world', 'search', 'good', 'search'];

let result = -1;

for (i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    result = i;
    break;
  }
}

console.log(result)


words = ['not', 'found'];
result = -1;

for (i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    result = i;
  }
}

console.log(result);

function findIndex(array, word) {
  // let result = -1

  for (i = 0; i < array.length; i++) {
    /* if (array[i] === word) {
      result = i;
      break;
    }
    */
    if (array[i] === word) {
      return i;
    }
  }

  // console.log(result);
  return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// 11r-u
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];


function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const foodsReversed = foodsCopy.reverse();
  
  const newArray = [];
  let eggAmount = 0;

  for (i = 0; i < foodsReversed.length; i++) {
    // if (!(eggAmount === 2)) {
      if (foodsReversed[i] === 'egg' && eggAmount < 2) {
        eggAmount++;
        continue;
      }
    // }

    newArray.push(foodsReversed[i]);
  }

  return newArray.reverse();
}

console.log(removeEgg(foods));
console.log(foods);

// 11u

