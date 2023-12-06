fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function f(response){
    return response.json();
})
.then(function f(val){
    console.log(val);
})