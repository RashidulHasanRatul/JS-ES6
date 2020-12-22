// With Spread Operator

let arr = [1,2,3,5];

let arr2 = [10,11,13];

let arr3 = [...arr2,...arr];
console.log(arr3);
// Without Spread Operator

let fname = ["Ratul","Hasan"];

let lname = ["Rashidul","Hasan"];

let name = [];
name.push(fname,lname);

console.log(name);