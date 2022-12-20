function sumaArray(arr) {
    let sumArray = arr.reduce((acc, currentValue)=>
        acc + currentValue,0
    )    
    return sumArray
}


console.log(sumaArray([]));  // imprime "15"
console.log(sumaArray([10, 20, 30]));  // imprime "60"
console.log(sumaArray([-1, 2, -3, 4, -5])); // imprime -3