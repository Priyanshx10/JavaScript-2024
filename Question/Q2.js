//Find the maximum number in an array.

let array = [1,2,3,4,5,6,7,8,9]

let max = Math.max(...array)
console.log(max)

function maxarr(array){
    return Math.max(...array)
}

console.log(maxarr([10,320,40,29]))