function createPromise(str){
    return new Promise(function greeting(resolve, reject){
        console.log(`Hello, ${str}`);
        resolve("Promise Done")
    })
}
let str = "Aman";
let output = createPromise(str);
output.then(function f(val){
    console.log(val);
})
