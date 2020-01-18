var charMap = []

function getRandom(arrayLength) {
    return Math.random() * (arrayLength + 1)
}

function generatePassword() {
    let passwordSize = document.getElementById('passwordSize').value
    const specialChar = document.getElementById('specialChar').checked
    const numeric = document.getElementById('numeric').checked
    const upperCase = document.getElementById('upperCase').checked
    const lowerCase = document.getElementById('lowerCase').checked



    //create array of possible password characters
    if (specialChar) {
        console.log('test')
        for (let i = 33; i < 48; i++) {
            charMap.push(String.fromCharCode(i))
        }
        for (let j = 58; j < 65; j++) {
            charMap.push(String.fromCharCode(j))

        }
        for (let k = 91; k < 97; k++) {
            charMap.push(String.fromCharCode(k))

        }
        for (let l = 123; l < 127; l++) {
            charMap.push(String.fromCharCode(l))

        }
        console.log('finish')
    }

    if (numeric) {
        for (let i = 0; i < 10; i++) {
            charMap.push(i)

        }

    }
    if (upperCase) {
        for (let i = 65; i < 91; i++) {
            charMap.push(String.fromCharCode(i))
        }

    }
    if (lowerCase) {
        for (let i = 97; i < 123; i++) {
            charMap.push(String.fromCharCode(i))
        }
    }


}