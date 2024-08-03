// a
const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);

// b
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

// c
function arraySwap(array) {
  const firstIndex = array[0];
  const lastIndex = array[array.length - 1];

  array[array.length - 1] = firstIndex;
  array[0] = lastIndex;

  return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

// d
for (let i = 0; i < 11; i +=2) {
  console.log(i);
}

// e
for (let i = 5; i > -1; i--) {
  console.log(i);
}

/* f
let i = 0;

while (i < 11) {
  console.log(i);
  i += 2;
}

i = 5;

while (i > -1) {
  console.log(i);
  i--;
}
*/

// g-h
const myArray = [1, 2, 3];

function addOne(array) {
  const newArray = [];  

  for (i = 0; i < array.length; i++) {
    let num = array[i];
    num++;
    newArray.push(num);
  }

  console.log(newArray);
}

addOne(myArray);
addOne([-2, -1, 0, 99]);

// i
function addNum(array, num) {
  const newArray = [];

  for (i = 0; i < array.length; i++) {
    let value = array[i];
    value += num;
    newArray.push(value);
  }
  console.log(newArray);
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

// j
function addArrays(array1, array2) {
  const newArray = [];

  for (i = 0; i < array1.length; i++) {
    const value1 = array1[i];
    const value2 = array2[i];

    const newValue = value1 + value2;
    newArray.push(newValue);
  }

  console.log(newArray);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

// k
function countPositive(nums) {
  let positiveNums = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveNums++;
    }
  }

  console.log(positiveNums);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);
