const min = 33;
const max = 126;
let passwordSize = 8;
let AsciiPassword = [];
function getRandom  ()  {
    return Math.random() * (max - min) + min;
};
document.getElementById('demo').innerHTML = parseInt(getRandom());

function CreatePasswordArray    (size)  {       
    for(let i=0; i<size; i++)   {
        AsciiPassword.push(parseInt(getRandom()));
    }

};