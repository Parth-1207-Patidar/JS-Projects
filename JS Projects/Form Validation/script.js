let username = document.getElementById('username');
let usernameError = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let confirmPassword = document.getElementById('confirmPassword');
let confirmPasswordError = document.getElementById('confirmPasswordError');
let submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {
    e.preventDefault();

    //username validation
    if(username.value.trim() === ''){
        username.style.border = '1px solid red';
        usernameError.textContent = 'Username is required';
        usernameError.style.color = 'red';
        return;
    }
    else{
        username.style.border = '1px solid green';
        usernameError.textContent = '';
    }

    //email validation
    if(email.value.trim() === ''){
        email.style.border = '1px solid red';
        emailError.textContent = 'Email is required';
        emailError.style.color = 'red';
        return;
    }
    else{
        email.style.border = '1px solid green';
        emailError.textContent = '';
    }

    //password validation
    if(password.value.trim() === ''){
        password.style.border = '1px solid red';
        passwordError.textContent = 'Password is required';
        passwordError.style.color = 'red';
        return;
    }
    else if(password.value.length < 8){
        password.style.border = '1px solid red';
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.color = 'red';
        return;
    }
    else{
        password.style.border = '1px solid green';
        passwordError.textContent = '';
    }

    //confirm password validation
    if (password.value !== confirmPassword.value){
        confirmPassword.style.border = '1px solid red';
        password.style.border = '1px solid red';
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.color = 'red';
        return;
    }
    else{
        confirmPassword.style.border = '1px solid green';
        confirmPasswordError.textContent = '';
    }

    alert('Form submitted');
    [username, email, password, confirmPassword].forEach(input => {
        input.value = '';
        input.style.border = '1px solid #ccc';
    });
})
