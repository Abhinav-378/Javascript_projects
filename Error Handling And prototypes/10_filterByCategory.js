function filterByCategory(arr){
    return function (cat){
        return arr.filter(function (ele) {
            return ele.category === cat;
          });
      
    }
}

var prod = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Sunglasses", category: "Accessories" }
]

var clothingProduct = filterByCategory(prod)("Clothing");

console.log(clothingProduct);