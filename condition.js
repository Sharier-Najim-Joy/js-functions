function evenNumber(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(evenNumber(10));
console.log(evenNumber(55));

function odd (number){
    if (number % 2 === 1) {
        return true;
    }
    else{
        return false;
    }
}
console.log(odd(55));
console.log(odd(10));


function number(num){
    const l = num.length;
    console.log(num,l);
}
number('sharier');