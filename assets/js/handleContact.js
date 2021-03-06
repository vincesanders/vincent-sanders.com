const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector('form');

name.addEventListener('input', nameHandleChange);
email.addEventListener('input', emailHandleChange);
message.addEventListener('input', messageHandleChange);
form.onsubmit = submit;

let nameValue;
let emailValue;
let messageValue;

function nameHandleChange(e) {
    nameValue = e.target.value;
}

function emailHandleChange(e) {
    emailValue = e.target.value;
}

function messageHandleChange(e) {
    messageValue = e.target.value;
}

function resetValues() {
    name.value = '';
    email.value = '';
    message.value = '';
}

function submit(e) {
    e.preventDefault();
    //submit form
    const contactMessage = {
        name: nameValue,
        email: emailValue,
        message: messageValue
    }
    fetch("https://vsportfolio-email-server.herokuapp.com/contact", { 
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactMessage)
        }).then(() => {
            resetValues();
        }).catch(err => {
            console.log(err.json());
        });
}