function printdouble(arr, doublearr) {
    let dblarr = doublearr(arr);
    console.log(dblarr);
}

function doublearr(arr) {
    let dblarr = arr.map(el => el*2);
    return dblarr;
}

let arr = [1, 2, 3, 4, 5];
printdouble(arr, doublearr);
