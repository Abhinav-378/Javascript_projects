function convertToNumber(str){
    let a= Number(str);

    if (!isNaN(a)) {
        console.log("Valid Number");
    } else {
        console.log("Invalid Number");
    }
}

convertToNumber('abc')
convertToNumber('123')