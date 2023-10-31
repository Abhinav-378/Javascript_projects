function numberChecker(arr){
    return (n) =>{
        return arr.includes(n);
    }
}

const arr = [1,3,5,7];

const checkNum = numberChecker(arr);

console.log(checkNum(2));
console.log(checkNum(5));