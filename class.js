class myClass {

    constructor (a,b){
    //  constructor return korte pare na 
        console.log("this is constructor");
       this.a=a 
       this.b=b

  
    }

    add(){
         let result = this.a+this.b;
        

         return result;
    }
}

let obj = new myClass(10,20);
console.log(obj);

console.log(obj.add());

// Class inheritance 

class parent {
a(){
    console.log("this is from parent");
}
}

class child extends parent {
    b(){
        console.log("this is from child");
    }

}

let example = new child();

example.a();