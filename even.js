function findEven(numbers) {
    let add = []
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            add.push(number);
        }

    }
    return add;
}
const numbers = [12, 13, 14, 15, 16, 17];
const sum = findEven(numbers)
console.log(sum);


function sumOfEven(numbers) {
    let sum =0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfEven(num));


function oddNumber (numbers){
    let sum = [];
    for(const number of numbers){
        if(number%2===1){
            console.log(number);
            sum.push(number);
        }
    }
    return sum;
}
const i =[1,2,3,4,5,6,7,8,9]
const x = oddNumber(i);
console.log(x);