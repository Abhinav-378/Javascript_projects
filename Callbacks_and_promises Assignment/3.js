function ageInDays(p, logResult){
    let fullName = p.fname + " " + p.lname ;
    let age = (p.age)*365;
    logResult(fullName, age);
}

function logResult(fullName, age){
    console.log(`Name is: ${fullName} and Age in days is : ${age}`);
}


let person = {
    fname : 'Michael',
    lname : 'Pheleps',
    age : 36
}

ageInDays(person, logResult)