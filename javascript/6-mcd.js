function mcd(a,b) {
    console.log('a vale'+a, 'b vale'+b);
    if (b === 0) {
        return a
    }
    return mcd(b, a%b)
}


console.log(mcd(10, 15));  // imprime "5"
// console.log(mcd(20, 10));  // imprime "10"
// console.log(mcd(9, 6));  // imprime "3"