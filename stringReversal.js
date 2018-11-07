// 1. String Reversal
// Given a string of characters as input, write a function that returns it with the characters reversed.

reverse = (input) => {
    return (input.split('').reverse().join(''));
}
reverse("Hello World!")