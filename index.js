// initializing variables

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let randomPassword = ""
let passwordLength = 15
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let messageEl = document.getElementById("message")

// main function
function generatePassword() {
    messageEl.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomIndex]
    }

    passwordEl1.textContent = randomPassword
    randomPassword = ""
    for (let j = 0; j < passwordLength; j++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomIndex]
    }

    passwordEl2.textContent = randomPassword
    randomPassword = ""
}

// copy to clipboard

passwordEl1.addEventListener('click', (event) => {
    // getting the text content that we want to copy
    const content1 = passwordEl1.textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content1);
    messageEl.textContent = `Password ${content1} copied succesfully!`
    reinitialize()
})

passwordEl2.addEventListener('click', (event) => {
    // getting the text content that we want to copy
    const content2 = passwordEl2.textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content2);
    messageEl.textContent = `Password ${content2} copied succesfully!`
    reinitialize()
})

// reset

function reinitialize(){
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
}