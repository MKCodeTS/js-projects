function interestingPolygon(n){
    if (n <0) {
        return false
    }
    return (n*n)+((n-1) * (n-1))
}

console.log(interestingPolygon(4));

