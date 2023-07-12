//problem 69. Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
var mySqrt = function(x){
    if (x <= 1){
        return x;
    }
    for ( let i = 2 ; i<= x; i++){
        if (i*i === x){
            return i;
        }
        if (i*i > x ){
            return i-1;
        
    }
}
}