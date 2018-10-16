/***** DECLARATIONS *****/

// Defaults
let content = '';
let errMsg = "Please do not leave blank, ";
let errSelect = "Please make a selection";

// Error messages
const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errOccasion = document.getElementById("errOccasion");
const errMessage = document.getElementById("errMessage");

// Form 
const form = document.querySelector("form");
const inputs = document.getElementsByTagName('input');

// Input info
const name = document.getElementById("name");
const email = document.getElementById("email");
const occasion = document.getElementById("occasion");
const message = document.getElementById("message");

/***** EVENT LISTENERS *****/

// For validations
document.getElementById("name").addEventListener("blur", nameValidate);
document.getElementById("email").addEventListener("blur", emailValidate);
document.getElementById("occasion").addEventListener("click", occasionValidate);
document.getElementById("message").addEventListener("blur", messageValidate);

// To submit form
form.addEventListener("submit", e=>
{
    e.preventDefault();

});

// To validate name
function nameValidate() {
        if(name.value == "") {
        errName.innerHTML = errMsg + "example: John Smith";
        name.focus();
    }
    else {
        errName.innerHTML = "";
    }
    
}

// To validate email
function emailValidate() {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if(email.value == "") {
        errEmail.innerHTML = errMsg + "example: jsmith@gmail.com";
        email.focus();
    }
    else if(!valid) {
        errEmail.innerHTML = "Wrong format, example: jsmith@gmail.com";
        email.focus();
    }
    else {
        errEmail.innerHTML = "";
    }
    
}

// To validate occasion
function occasionValidate() {
        if(occasion.value == "Choose") {
        errOccasion.innerHTML = errSelect;
        occasion.focus();
    }
    else {
        errOccasion.innerHTML = "";
    }
    
}

// To validate name
function messageValidate() {
        if(message.value == "") {
        errMessage.innerHTML = errMsg + "example: I want party favors for a birthay party";
        message.focus();
    }
    else {
        errMessage.innerHTML = "";
    }
    
}
