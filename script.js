function validate(e) {
    e.preventdefault();

    const email = document.getElementById("email").Value;
    const pass = document.getElementById("password").Value;
    const age = document.getElementById("age").Value;
    const msgbox  = document.getElementById("message");

    let message = '';

    if (email === '') {
        message = "Please enter your email.";
        msgbox.style.color = 'red';
    }

    else if (pass === '') {
        message = "Please enter your password.";
        msgbox.style.color = 'red';
    }

    else if (age === '') {
        message = "Please enter your age.";
        msgbox.style.color = 'red';
    }

    else {
        message = "login successful";
        msgbox.style.color = "green"
    }

    msgbox.innerText = message;
}