const min = 33
const max = 126
let passwordSize
let AsciiPassword = []
let charMap = []
let specialChar
let numeric
let upperCase
let lowerCase

//creating a array of possible characters to run functions against
for (let i = 33; i < 127; i++) {
    charMap.push(String.fromCharCode(i))

}

//creates a random number
function getRandom(arrayLength) {
    return Math.random() * (arrayLength + 1)
}


//fills an array with random ascii values based on passwordsize
function CreatePasswordArray(size) {
    for (let i = 0; i < size; i++) {
        AsciiPassword.push(charMap[parseInt(getRandom(charMap.length))]);
    }

}

passwordSize = prompt('How many characters is your password?')
specialChar = confirm('would you like special characters in it?')
numeric = confirm('would you like numbers in it?')
upperCase = confirm('would you like uppercase letters?')
lowerCase = confirm('would you like lowercase in the password?')

if (specialChar === true && numeric === true & upperCase === true && lowerCase === true) {
    CreatePasswordArray(passwordSize);
    alert(AsciiPassword);
}