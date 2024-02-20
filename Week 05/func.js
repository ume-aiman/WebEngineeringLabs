 // named functions
 function greet(name){
    return "hello " + name;
}
console.log(greet("aiman"));

// Aroow functions
const greeting = name => {
    return "hello " + name;
}
console.log(greeting("Aiman"));

// Anonymus Function 
const greetings = function(name) {
    return 'Hello, ' + name + '!';
    };

console.log(greetings("Ume-Aiman"));

(function() { console.log('I am immediately invoked.'); })();

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
return num * 2;});
console.log(numbers.map);
