/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  if (c > a && c > b) return c;
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  const difX = queen.x - king.x;
  const difY = queen.y - king.y;
  if (difX / difY === 1 || difX / difY === -1) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || a === c || c === b) return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let newNum = num;
  let romanNum = '';
  while (newNum >= 10) {
    romanNum += 'X';
    newNum -= 10;
  }
  if (newNum > 0) {
    romanNum += romans[newNum - 1];
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const NUM_STRS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let stringRep = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const c = numberStr[i];
    let char;
    switch (c) {
      case '-':
        char = 'minus';
        break;
      case '.':
      case ',':
        char = 'point';
        break;
      default:
        char = NUM_STRS[+c];
    }
    stringRep += char;
    if (i !== numberStr.length - 1) {
      stringRep += ' ';
    }
  }

  return stringRep;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let newNum = num;
  while (newNum > 0) {
    if (newNum % 10 === digit) return true;
    newNum = Math.floor(newNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = arr[0];
  let rightSum = 0;
  for (let i = 2; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 1; i < arr.length; i += 1) {
    if (rightSum === leftSum) {
      return i;
    }
    rightSum -= arr[i + 1];
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    const row = new Array(size);
    for (let j = 0; j < size; j += 1) {
      row[j] = -1;
    }
    matrix[i] = row;
  }
  let direction = 0;
  let row = 0;
  let col = 0;
  for (let i = 1; i <= size * size; i += 1) {
    matrix[row][col] = i;
    switch (direction) {
      case 0:
        if (matrix[row][col + 1] !== -1) {
          direction = 1;
          row += 1;
        } else {
          col += 1;
        }
        break;
      case 1:
        if (!matrix[row + 1] || matrix[row + 1][col] !== -1) {
          direction = 2;
          col -= 1;
        } else {
          row += 1;
        }
        break;
      case 2:
        if (matrix[row][col - 1] !== -1) {
          direction = 3;
          row -= 1;
        } else {
          col -= 1;
        }
        break;
      case 3:
        if (!matrix[row - 1] || matrix[row - 1][col] !== -1) {
          direction = 0;
          col += 1;
        } else {
          row -= 1;
        }
        break;
      default:
        break;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const mtxToEdit = matrix;
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i += 1) {
      const temp = matrix[l][l + i];
      mtxToEdit[l][l + i] = mtxToEdit[r - i][l];
      mtxToEdit[r - i][l] = mtxToEdit[r][r - i];
      mtxToEdit[r][r - i] = mtxToEdit[l + i][r];
      mtxToEdit[l + i][r] = temp;
    }
    l += 1;
    r -= 1;
  }

  return mtxToEdit;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function quickSort(array, l = 0, r = arr.length - 1) {
    const switchPivot = (nums, left, right) => {
      const newNums = nums;
      const p = right;
      let j = left;
      let i = left - 1;

      while (j <= p) {
        if (newNums[j] < newNums[p]) {
          i += 1;
          [newNums[i], newNums[j]] = [newNums[j], newNums[i]];
          j += 1;
        } else {
          j += 1;
        }
      }

      i += 1;
      [newNums[i], newNums[p]] = [newNums[p], newNums[i]];

      return i;
    };

    if (l < r) {
      const pivotIdx = switchPivot(array, l, r);

      quickSort(array, l, pivotIdx - 1);
      quickSort(array, pivotIdx + 1, r);
    }

    return arr;
  }
  return quickSort(arr);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let left = '';
  let right = '';
  let shuffled = str;
  let n = 0;
  do {
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        left += shuffled[j];
      } else {
        right += shuffled[j];
      }
    }
    shuffled = left + right;
    left = '';
    right = '';
    n += 1;
    if (n === iterations) return shuffled;
  } while (shuffled !== str);
  for (let i = 0; i < iterations % n; i += 1) {
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        left += shuffled[j];
      } else {
        right += shuffled[j];
      }
    }
    shuffled = left + right;
    left = '';
    right = '';
  }
  return shuffled;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = new Array(Math.floor(Math.log10(number)) + 1);
  let temp = number;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arr[i] = temp % 10;
    temp = Math.floor(temp / 10);
  }

  let firstSmallerIdx;
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      firstSmallerIdx = i;
      break;
    }
  }

  if (!firstSmallerIdx) return number;

  let minIdx;
  for (let i = firstSmallerIdx + 1; i < arr.length; i += 1) {
    if (arr[i] > arr[firstSmallerIdx] && (!minIdx || arr[minIdx] > arr[i])) {
      minIdx = i;
    }
  }

  if (minIdx)
    [arr[firstSmallerIdx], arr[minIdx]] = [arr[minIdx], arr[firstSmallerIdx]];
  for (let i = firstSmallerIdx + 1; i < arr.length; i += 1) {
    for (let j = firstSmallerIdx + 1; j < arr.length - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  let output = 0;
  for (let i = 0; i < arr.length; i += 1) {
    output *= 10;
    output += arr[i];
  }
  return output;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
