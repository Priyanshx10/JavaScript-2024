//Calculate the sum of numbers within an array.

function arraysum(arr){
   return arr.reduce((sum , num) => sum + num , 0)
}

console.log(arraysum([2,4,5,6,8]))