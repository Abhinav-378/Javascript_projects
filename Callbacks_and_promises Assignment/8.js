fetch("https://jsonplaceholder.typicode.com/posts")
.then(function f(response){
    return response.json();
})
.then(function f(val){
    console.log(val);
})