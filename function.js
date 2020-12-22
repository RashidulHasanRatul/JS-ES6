// Rest Parameter 

function fun1(...arg) {
    // recive like array
    console.log(arg);
}

fun1(1,2,3,4,5);

// Annymous function

let fn = function () {
    return "Ratul";
}

console.log(fn());

// Arrow Function

let myArrow = ()=>{
    console.log("This is Arrow");
}

myArrow();