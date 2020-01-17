function generatePassword() {
    var passwordSize = document.getElementById('passwordSize').value
    alert(passwordSize)
    const specialChar = document.getElementById('specialChar').checked
    alert(specialChar)

    const numeric = document.getElementById('numeric').checked
    alert(numeric)

    const upperCase = document.getElementById('upperCase').checked
    alert(upperCase)

    const lowerCase = document.getElementById('lowerCase').checked
    alert(lowerCase)


}