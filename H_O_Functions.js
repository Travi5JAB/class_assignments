// multiply array info by 10 and return new array
var arr1 = [3, 9, 15, 4, 10]
mult10 = (array) =>{
  let newArr = array.map(value => value * 10)
        return newArr
      }
console.log(mult10(arr1));
// outputs -> [30, 90, 150, 40, 100]
console.log("");
/////////////////////////////////////////////////////////////////////////////

// Write an anonymous function that takes in an array and returns a new array with only odd numbers
var arr2 = [2, 7, 3, 5, 8, 10, 13]
odds =(array) => array.filter(number => number % 2);

console.log(odds(arr2));
// expected output = [7, 3, 5, 13]
console.log("");
//////////////////////////////////////////////////////////////////////////

// Write a function that takes in an array of numbers and letters and returns a
// new array with only the letters. HINT: use typeof() method.

var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]
