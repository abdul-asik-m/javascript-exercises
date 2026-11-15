const reverseString = function(string) {
    // let result = ""
    // for(const str of string){
    //     result = str + result;
    // }
    // return result;
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
