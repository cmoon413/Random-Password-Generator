const min = 33
const max = 126
let passwordSize
let AsciiPassword = []
var charMap = []

//creating a array of possible characters to run functions against
for (let i = 33; i < 127; i++) {
    charMap.push(String.fromCharCode(i))

}

//creates a random number based on ascii value range
function getRandom() {
    return Math.random() * 93
};


//fills an array with random ascii values based on passwordsize
function CreatePasswordArray(size) {
    for (let i = 0; i < size; i++) {
        AsciiPassword.push(charMap[parseInt(getRandom())]);
    }

};

passwordSize = prompt('How many characters is your password?')
CreatePasswordArray(passwordSize)
alert(AsciiPassword)