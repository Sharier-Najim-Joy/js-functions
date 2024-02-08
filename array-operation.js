function totalNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
          sum = sum + number;
    }
    return sum;
}

const add = [12, 2, 3, 5,10];
// const sum = totalNumber(add);
// console.log(sum);
console.log(totalNumber(add));