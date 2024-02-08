// o1
// Take four parameters. Multiply the four numbers and then return the result
function multiply(num1, num2, num3, num4) {
    const multi = num1 * num2 * num3 * num4;
    return multi;
}
const sum = multiply(12, 13, 14, 15);
// console.log(sum);

// 02
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddEven(numbers) {
    if (numbers % 2 === 0) {
        const multiply = numbers * 2;
        return multiply;
    }
    else {
        const divide = numbers / 2;
        return divide;
    }
}

// console.log(oddEven(10));
// console.log(oddEven(15));

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(numbers) {
    const size = numbers.length;
    console.log('length size:', size);
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        sum = sum + number;
    }
    return sum / size;
    //   return sum + ' '+ sum/size;
}
const avg = [1, 2, 3, 4, 5];
// const add = makeAvg(avg);
// console.log(add);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// const findA = "Count how many times a string has the letter a AAAAAA";
// console.log(findA.match(/a/g).length);

function count_zero(str) {
    console.log(str);
    console.log(str.match(/0/g).length);
}
// count_zero('01010101010100');

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number) {
    if (number % 2 === 0) {
        return 'even';
    }
    else{
        return 'odd';
    }
}

