// 2. Palindrome
// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

palindrome = (input) => {
    let filtered = input.replace(/\W/g, '').toLowerCase();
    let reversed = filtered.split("").reverse().join("");
    
    return (filtered === reversed);
}

palindrome("Cigar? Toss it in a can. It is so tragic");