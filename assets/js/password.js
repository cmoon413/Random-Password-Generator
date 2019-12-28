const min = 33;
const max = 126;
let passwordSize = 8;
let AsciiPassword = [];

//creates a random number based on ascii value range
function getRandom  ()  {
    return Math.random() * (max - min) + min;
};


//fills an array with random ascii values based on passwordsize
function CreatePasswordArray    (size)  {       
    for(let i=0; i<size; i++)   {
        AsciiPassword.push("&#" + parseInt(getRandom()));
    }

};

CreatePasswordArray(passwordSize);
document.getElementById('demo').innerHTML = "<p>" + AsciiPassword[0] + "</p>" 