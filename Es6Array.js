// Array De structuring

let country = ["Bangladesh","IND","Pak","can"];

// Destructuring frame let []=country
let [a,,,b] = country;

console.log(b);

// Map
// Map is collection of data 

let myMap = new Map();

myMap.set("key1","Bangladesh");
myMap.set("key2","canada");
myMap.set("key3","Srilanka");
myMap.set("key4","Australia");
myMap.set("key5","USA");
console.log(myMap.values());
console.log(myMap.keys());
// Map Method delete(key),get(key),clear(key),has(key)

// Delete
myMap.delete("key1");
console.log(myMap);



// Get
console.log(myMap.get("key5"));

if(myMap.get("key3")=="Srilanka"){
    console.log("This is Srilanka");
}

// clear 

// myMap.clear("key2");
// console.log(myMap);

if(myMap.has("key5")){
    console.log("Vai Usa Ase");
}

// map e duplicate value Rakha Jabe but set er moddhe jabe na

// Set 

let mySet = new Set();
mySet.add("Apple");
mySet.add("Banana");
mySet.add("Mango");
mySet.add("Cucumber");

console.log(mySet);


// Map er motoi method ase set er moddhe 


