function getPerson(obj){
    try{
        if(!obj.name || !obj.age || typeof(obj) != 'object'){
            throw "Invalid parameter type"
        }
        else{
            console.log(`Name: ${obj.name}, Age: ${obj.age}`);
        }
    }
    catch(e){
        console.log(e);
    }
}

let obj1 = {
    name : "Abhinav",
    age: 20
}

getPerson(obj1)