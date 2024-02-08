function even (num){
    const l = num.length;
    console.log(num,l);
    if(l % 2 === 0){
        console.log('even number');
        return true;
    }
    else{
        console.log('odd number');
        return false;
    }
}
even('cumilla');
even('faka');

function doubleTriple (number,double){
    if(double === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleTriple(10,true));
console.log(doubleTriple(10,false));

function a (number){
    const len = number.length;
    return len;
}
// console.log(a([12,13,14,15,16,17]));
