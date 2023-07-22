let isHappy = function(n){
    if (n>10){
        if (n ===1 || n ===7){
            return true;
        }
        return false;
    }
     var total = 0;
    while(n>0){
        var sq = n%10;
        total += sq**2;
        n -=sq;
        n  /= 10;
        
    }
    if (n===1){
        return true;
    }
    return isHappy(total);
} 