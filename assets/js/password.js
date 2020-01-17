const min = 33
const max = 126
let passwordSize
let AsciiPassword = []
let charMap = []
let specialChar
let numeric
let upperCase
let lowerCase
let alphaNumeric = /^[0-9a-z]+$/
let customMap
    //creating a array of possible characters to run functions against
for (let i = 33; i < 127; i++) {
    charMap.push(String.fromCharCode(i))

}


//creates a random number
function getRandom(arrayLength) {
    return Math.random() * (arrayLength + 1)
}


//fills an array with random ascii values based on passwordsize
function CreatePasswordArray(size, arrayLength) {
    for (let i = 0; i < size; i++) {
        AsciiPassword.push(charMap[parseInt(getRandom(arrayLength))]);
    }

}

function removeParemeters(array, testParameter) {
    for (let i = 0; i < array.length; i++) {
        const index = array.indexOf(testParameter);
        array.splice(index, 1);

    }
}


//test prompts
passwordSize = prompt('How many characters is your password?')
specialChar = confirm('would you like special characters in it?')
numeric = confirm('would you like numbers in it?')
upperCase = confirm('would you like uppercase letters?')
lowerCase = confirm('would you like lowercase in the password?')
customMap = charMap
    //checks parameters then generates random password based on them
if (specialChar === true && numeric === true & upperCase === true && lowerCase === true) {
    CreatePasswordArray(passwordSize, charMap.length);
    alert(AsciiPassword);
} else if (!specialChar) {
    removeParemeters(customMap, !alphaNumeric)
    CreatePasswordArray(passwordSize, customMap)
}