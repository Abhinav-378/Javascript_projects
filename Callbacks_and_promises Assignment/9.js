fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then(function f(response) {
    if (!response.ok) {
      throw "No data present";
    }
    return response.json();
  })
  .then(function f(val) {
    console.log(val);
  })
  .catch(function f(err) {
    console.log(err);
  });
