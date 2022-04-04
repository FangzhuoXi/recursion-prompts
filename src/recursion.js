/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  return array.reduce(function(sum, element) {
    if (!Array.isArray(element)) {
      sum += element;

    } else {
      sum += arraySum(element);
    }
    return sum;
  }, 0)
};

// 4. Check if a number is even. should not use modulo
var isEven = function(n) {
  var positiveN = Math.abs(n);
  if (positiveN === 1) {
    return false;
  } else if (positiveN === 2 || positiveN === 0) {
    return true;
  } else {
    return isEven(positiveN - 2)
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(-7); // -21
var sumBelow = function(n) {
  if (n === 0 || n === 1) {
    return 0
  } else if (n < 0) {
    return -sumBelow(-n);
  } else {
    return n - 1 + sumBelow(n - 1)
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x > y) {
    [x, y] = [y, x]
    return range(x, y).reverse();
  }

  if (y === x || y === x + 1) {
    return []
  }

  return [x + 1].concat(range(x + 1, y))
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return 1 / exponent(base, -1 * exp);
  } else if (exp % 2 === 0) {
    var y = exponent(base, exp / 2)
    return y * y;
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 0 || n < 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 === 0) {
    return powerOfTwo(n / 2)
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return "";
  }
  return string[string.length - 1].concat(reverse(string.slice(0, string.length - 1)));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var halfLength = Math.floor(string.length / 2);
  if (halfLength === 0) {
    return true;
  } else if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    return palindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator. No *, /, Math
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    if (x > y) {
      return modulo(x - y, y)
    } else if (y > x) {
      return x;
    } else {
      return 0;
    }
  } else if (x > 0 && y < 0) {
    if (x + y > 0) {
      return modulo(x + y, y)
    } else if (x + y < 0) {
      return x;
    } else {
      return 0;
    }
  } else if (x < 0 && y > 0) {
    if (x + y < 0) {
      return modulo(x + y, y)
    } else if (x + y > 0) {
      return x;
    } else {
      return 0;
    }
  } else {
    if (x - y < 0) {
      return modulo(x - y, y)
    } else if (x - y > 0) {
      return x;
    } else {
      return 0;
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, y - 1);
  } else if (y < 0) {
    return multiply(x, y + 1) - x;
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    if (x > y) {
      return 1 + divide(x - y, y);
    } else if (x < y) {
      return 0
    } else {
      return 1;
    }
  } else if (x > 0 && y < 0) {
    if (x + y > 0) {
      return divide(x + y, y) - 1
    } else if (x + y < 0) {
      return 0;
    } else {
      return -1;
    }
  } else if (x < 0 && y > 0) {
    if (x + y < 0) {
      return divide(x + y, y) - 1
    } else if (x + y > 0) {
      return 0;
    } else {
      return -1;
    }
  } else if (x < 0 && y < 0) {
    if (x < y) {
      return 1 + divide(x - y, y);
    } else if (x > y) {
      return 0;
    } else {
      return 1;
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  } else if (y === 0) {
    return x;
  }

  if (x > y) {
    var remain = x % y;
    return gcd(y, remain);
  } else if (x < y) {
    var remain = y % x;
    return gcd(remain, x);
  } else {
    return x;
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  } else if (n % 3 === 0 && n % 5 === 0) {
    var result = fizzBuzz(n - 1);
    result.push('FizzBuzz')
    return result;
  } else if (n % 3 === 0) {
    var result = fizzBuzz(n - 1);
    result.push('Fizz')
    return result;
  } else if (n % 5 === 0) {
    var result = fizzBuzz(n - 1);
    result.push('Buzz')
    return result;
  } else {
    var result = fizzBuzz(n-1);
    result.push(n.toString());
    return result;
  }}

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    var returnArray = [callback(array[0])];
    return returnArray.concat(rMap(array.slice(1), callback))
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var objKeys = Object.keys(obj);
  return objKeys.reduce(function(count, objKey) {
      if (objKey === key) {
        count ++;
      }
      if (typeof obj[objKey] === 'object') {
        count += countKeysInObj(obj[objKey], key)
      }
      return count;
    }, 0)
}

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var objValue = Object.values(obj);
  return objValue.reduce(function(count, element){
    if (element === value) {
      count ++;
    } else if (typeof element === 'object' ) {
      return count + countValuesInObj(element, value);
    }
    return count;
  }, 0)
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  var objKeys = Object.keys(obj);
  objKeys.forEach(function(key){
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }

    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  })
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else {
    var y = fibonacci(n - 1)
    return y.concat(y[n - 1] + y [n - 2]);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return []
  }
  var result = capitalizeWords(array.slice(0, array.length - 1));
  result.push(array[array.length - 1].toUpperCase());
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = capitalizeFirst(array.slice(0, array.length - 1));
  var element = array[array.length - 1].split('');
  element[0] = element[0].toUpperCase();
  result.push(element.join(""))
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var objValue = Object.values(obj);
  return objValue.reduce(function(sum, element) {
    if (element % 2 === 0) {
      sum += element;
    } else if (typeof element === 'object') {
      sum += nestedEvenSum(element);
    }
    return sum;
  }, 0)
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  return array.reduce(function(returnArray, element) {
    if (Array.isArray(element)) {
      return returnArray.concat(flatten(element));
    } else {
      returnArray.push(element)
      return returnArray;
    }
  }, [])
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  if (str[0] in obj) {
    obj[str[0]] ++;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element.
// The order of the elements should not be changed.
// compress([1,1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 1) {
    return [list[0]];
  }
  if (list[0] === list[1]) {
    return compress(list.slice(1, list.length))
  } else {
    var result = [list[0]];
    return result.concat(compress(list.slice(1, list.length)));
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  array[0].push(aug)
  var result = [array[0]]
  return result.concat(augmentElements(array.slice(1), aug))
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  var result = [];
  if (array[0] !== 0) {
    result.push(array[0]);
  } else if (array[0] === 0 && (array[1] !== 0 || 1 >= array.length)) {
    result.push(array[0])
  }
  result = result.concat(minimizeZeroes(array.slice(1)))
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 2) {
    return [Math.abs(array[0]),-1 * Math.abs(array[1])];
  } else if (array.length === 1) {
    return [Math.abs(array[0])];
  } else if (array.length === 0) {
    return []
  } else {
    return [Math.abs(array[0]),-1 * Math.abs(array[1])].concat(alternateSign(array.slice(2)));
  }

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numDic = {'1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7':'seven', '8': 'eight', '9': 'nine', '10': 'ten'};
  var arr = str.split(" ");
  var returnArr = [];
  if (arr[0] in numDic) {
    returnArr.push(numDic[arr[0]]);
  } else {
    returnArr.push(arr[0]);
  }

  if (arr.length > 1) {
    returnArr = returnArr.concat(numToText(arr.slice(1).join(" ")));
  }

  return returnArr.join(" ");
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var node = node || document.body;
  var count = 0;

  if (node.localName === tag) {
    count ++;
  }

  if (node.childNodes.length > 0) {
    for (var i = 0; i < node.childNodes.length; i ++) {
      count += tagCount(tag, node.childNodes[i]);
    }
  }
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// input1 = [1,2,3,4,5,6];
// input2 = [1,2,3,4,5,6,7];
// input3 = [-5,-4,-3,-2,-1];
// input4 = [-6,-5,-4,-3,-2,-1];
// input5 = [-4,-3,-2,-1,0,1,2,3];
// primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43];
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  var middleIndex = Math.floor((min + max) / 2);
  if (min > max) {
    return null;
  }

  if (array[middleIndex] > target) {
    return binarySearch(array, target, min, middleIndex - 1);
  } else if (array[middleIndex] < target) {
    return binarySearch(array, target, middleIndex + 1, max);
  } else {
    return middleIndex;
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]'
// [34,7,23] [32,5,62]
// [34], [7], [23], [32], [5], [62]
// [7, 23, 34], [5, 32, 62]
// [5, 7, 23, 32, 34, 62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  // divide
  if (array.length <= 1) {
    return array;
  } else {
    var middle = Math.floor((array.length - 1) / 2)
    var leftArr = array.slice(0, middle + 1);
    var rightArr = array.slice(middle + 1);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
};

function merge(arr1, arr2) {
  var outputArray = [];

  if (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      outputArray.push(arr2[0]);
      return outputArray.concat(merge(arr1, arr2.slice(1)));
    } else {
      outputArray.push(arr1[0]);
      return outputArray.concat(merge(arr1.slice(1), arr2));
    }
  } else if (arr1.length > 0 && arr2.length === 0) {
    return outputArray.concat(arr1);
  } else if (arr1.length === 0 && arr2.length > 0) {
    return outputArray.concat(arr2);
  }
  return outputArray;
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
// array1 = [1,[2,[]],3,[[[4]],5]];
// array2 = [1,[2,{a:[{},2,3]}],{3:[4]},5];
var clone = function(input) {
  if (Array.isArray(input)) {
    var cloneObj = input.reduce(function(copy, element) {
      if (typeof element === 'object') {
        copy.push(clone(element));
      } else {
        copy.push(element)
      }
      return copy;
    }, [])
    return cloneObj
  } else if (typeof input === 'object') {
    var cloneObj = {};
    for (var key in input) {
      if (typeof input[key] === 'object') {
        cloneObj[key] = clone(input[key]);
      } else {
        cloneObj[key] = input[key];
      }
    }
    return cloneObj;
  }
};