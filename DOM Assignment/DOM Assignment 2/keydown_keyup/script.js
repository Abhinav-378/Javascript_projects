let up=document.getElementById("key");
let down=document.getElementById("key");

document.addEventListener("keyup",upp);
function upp(k){
    up.innerText= k.key+ " key is UP"
    up.style.fontWeight="bolder" ;
    down.style.color="green";
}


document.addEventListener("keydown",downn);
function downn(k){
    down.innerText= k.key+" key is down"
    down.style.fontWeight=100;
    down.style.color="red";
}