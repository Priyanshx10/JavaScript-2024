var fs = [];

for (var i = 0; i < 10; i++) {

    fs.push(function(){
        console.log(i)
    }) 
}

fs.forEach(function(f){
    f();
})

//Output
/*
10
10
10
10
10
10
10
10
10
10 
*/

let fs2 = [];

for (let i = 0; i < 10; i++) {

    fs2.push(function(){
        console.log(i)
    }) 
}

fs2.forEach(function(f){
    f();
})

/*
0
1
2
3
4
5
6
7
8
9
 */
