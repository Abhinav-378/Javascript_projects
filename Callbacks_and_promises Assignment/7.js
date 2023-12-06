let obj1, obj2,obj3 = {};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function f(response) {
    return response.json();
  })
  .then(function f(val1) {
    console.log(val1);
    obj1 = val1;

    obj3.todo = obj1;
    if (obj1 !== undefined && obj2 !== undefined) {
        console.log(obj3);
    }
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function f(response) {
    return response.json();
  })
  .then(function f(val2) {
    obj2 = val2;
    obj3.post = obj2;
    if (obj1 !== undefined && obj2 !== undefined) {
        console.log(obj3);
    }
  });