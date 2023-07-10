//Increment the large integer by one and return the resulting array of digits.
var  lengthOfLastWord  = function(s){
     var length = 0;
    for (let i = s.length; i>=0; i++){
        if(s[i] !== ' '){
            length += 1;
        }
        else if( length !== 0){
            break;
        }
    }
    return length;
};