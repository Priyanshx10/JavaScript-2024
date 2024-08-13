//Return only the even numbers from an array.

function evenNumber(arr){
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}

console.log(evenNumber([2,3,4,5,6,7]))