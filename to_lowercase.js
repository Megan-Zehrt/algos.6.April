var toLowerCase = function(s) {
    
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode(charCode + 32); // Convert to lowercase
        } else {
            result += s[i]; // Append character as is
        }
    }
    return result;
};