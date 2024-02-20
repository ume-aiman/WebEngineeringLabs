var student = {
    name : "aiman",
    cms : "021-21-0052",
    semester : "7th",
    department : "computer science"
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
// console.log(Object.assign(student,{grade:"A"}));
console.log(Object.getOwnPropertyNames(student));
console.log(Object.keys(student));
console.log(Object.freeze(student));
//console.log(Object.assign(student , {grade: "A"}));   cannot assign becuse object is freeze

console.log(Object.seal(student));


var num = [1,2,3,4,1,4,3];
var n = {
  
}
n['1']=1;
console.log(n);
n['1'] = 100
console.log(n['1']++);
if (n['0']){
    console.log("Key found");
}
else{
    console.log("key not found");
}


var obj = {
    "123":1, "234":3 , "485":6 
}
//array = ["orange" , "banana" , "mango"];
array2 = [{id : "123"} , {id : "234"} , {id : "485"}];
for (var i = 0; i < 3 ; i++){
    const element = array2[i];

    if(obj[element]) {
          obj[element]++;
    }
    else {
        obj[element] = 1;
    }
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
