const reverseString = function(word) {
   
    let string = word.split('')
    x = string.reverse();
    y = x.join('');
    
    return y;
};

// Do not edit below this line
module.exports = reverseString;
