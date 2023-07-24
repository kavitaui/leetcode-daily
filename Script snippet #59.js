var addDigits = function(num) {
    if (num <=9){
        return num;
    }
    var total = 0;
    while(num>0){
        total += num%10;
        num = Math.floor(num/10); 

    }
    return addDigits(total);
};