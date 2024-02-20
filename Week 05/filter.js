const numbers = [1, 2, 3, 4, 5 , 6,7,8,9];

const temp = numbers.filter(function(element){
  return element % 2 == 1;
});
console.log(temp)
// filterworks on boolen