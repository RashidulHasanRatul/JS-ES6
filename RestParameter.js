

function number(name,...n) {
  
    let sum = 0;

    for(let i of n){
        sum = sum +i;

    }
    console.log(name,sum);
    
}

number("Ratul",1,2,3,4,5);
