//const = a variable that cannot be changed

//a if a variable is a const it consist all the Capital letter in the Name if its Boolean or Number .these convention doesnt follow for Strings

const PI = 3.14159
let radius ;
let circumference;


document.getElementById("myButton").onclick = function () {
    radius = document.getElementById("myInput").value;
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("result").innerHTML = "The circumference is " + circumference
    
}
