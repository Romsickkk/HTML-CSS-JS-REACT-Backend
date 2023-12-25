// input => [1,2,3,3,4,4,5,5,6,6,3,3,5,5,23,34,34]

// output => [3,4,5,6,34]

// const input = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 3, 3, 5, 5, 23, 34, 34];
// let output = new Set();

// for (let i = 0; i < input.length; i++) {
//   if (input[i + 1] == input[i]) {
//     output.add(input[i]);
//   } else {
//     console.log("not pushed");
//   }
// }

// console.log(output);

// const nums = 12;
// let answer = [];

// for (let x = 0; x < nums; x++) {
//   // answer += x + ",";
//   answer.push(x);
// }
// console.log(answer.join(",").length);

// let array = [1, 2, 3, 4, 3, 2, 1];

// let obj = {};

// let obj = {

// };

// let i = 10;

// obj[i] = +1;
// obj[i] += 1;
// obj[i] += 1;

// for (let i = 0; i < array.length; i++) {
//   let a = array[i];
//   if (obj[a] != undefined) {
//     ++obj[a];
//   } else {
//     obj[a] = 1;
//   }
// }
// console.log(obj);

// const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19];

// const duplicates = [];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
//       duplicates.push(numbers[i]);
//     }
//   }
// }

// console.log(duplicates); // => ['3', '4', '19']

let array = [1, 2, 3, 4, 3, 2, 1];

let obj = {};

let answer = [];

for (let i = 0; i < array.length; i++) {
  let a = array[i];
  if (obj[a] != undefined) {
    ++obj[a];
  } else {
    obj[a] = 1;
  }
}

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   if (obj[i] > 1) {
//     answer.push(Object.keys(obj[i]));
//   }
// }

for (const property in obj) {
  if (obj[property] > 1) {
    answer.push(property);
  }
}

console.log(answer);
нм;
