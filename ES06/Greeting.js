// Anonymous functions
var createGreeting = function(message,name){
    return message + name ;
}
createGreeting( "Hello, " , "John");
console.log(createGreeting("Hello, ", "John"));


//Arrow Function
var createGreeting2 = (message,name) => message + name;
console.log(createGreeting2("Hello, ", "Priyansh"));

var squared = x => x * x;
console.log(squared(5));