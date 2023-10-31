function convertToNumber(str){
    let a= Number(str);
    try {
        if (!isNaN(a)) {
            console.log("Valid Number");
        }
        else {
            throw "Invalid Number"
        }
    } catch (e) {
        console.log(e);
    }

     
}

convertToNumber('abc')
convertToNumber('123')