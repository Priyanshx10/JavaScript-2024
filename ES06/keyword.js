
//Var is a global defined and Let is scoped defined
var message = "hello";

{
    var message = 'bye';
}

console.log( message );

//changes var to let for ES06

let message2 = "hello";

{
    let message2 = 'bye';
}

console.log( message2 );

//ES5 has function Scoping
var message3 = "hello";

function greets(){
    var message = 'bye';
}

console.log( message3 );
