 //Counter Programmer

 const Decrease = document.getElementById("Decrement")
 const Increment = document.getElementById("Increment")
 const Reset = document.getElementById("Reset")
 const number =document.getElementById("number")

 let count = 0;

 Increment.onclick = function(){
    count++;
    number.textContent=  count;
 }

 Decrease.onclick = function(){
    count--;
    number.textContent=  count;
 }

 Reset.onclick = function(){
    count = 0;
    number.textContent=  count;
 }