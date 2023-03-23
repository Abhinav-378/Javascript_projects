let x=document.getElementById("displayVal");
console.log(x);
x.innerText=0;

function dec(){
    x.innerText= Number(x.innerText)-1;
}
function inc(){
    (x.innerText)= Number(x.innerText)+1 ;
}

function reset(){
    x.innerText=0;
}



