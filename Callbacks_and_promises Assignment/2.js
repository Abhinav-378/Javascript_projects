function manipulateString(str, logstr){
    
    logstr(str.toUpperCase())
}

function logstr(str){
    console.log(`The manipulated string is: ${str}`);
}

let s = "Hello js";
manipulateString(s, logstr);
