
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("password2")

form.addEventListener('submit', function (event) {
    event.preventDefault()
    inputValue()
})

function inputValue() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = confirmPassword.value.trim()
    if (usernameValue === '') {
        setIncorrectFor(username, 'username cannot be blank')
    }
    else if (usernameValue.length < 6) {
        setIncorrectFor(username, 'username must be up to 6 characters')
    }
    else {
        setCorrect(username)
    }

    if (emailValue === '') {
        setIncorrectFor(email, 'email cannot be blank')
    }
    
    else {
        setCorrect(email)
    }

    if (passwordValue === '') {
        setIncorrectFor(password, 'you must input your unique password')
    }
    else if (passwordValue.length < 8) {
        setIncorrectFor(password, 'password must be at least 8 characters')
    }
    else {
        setCorrect(password)
    }

    if (password2Value === '') {
        setIncorrectFor(confirmPassword, 'you must repeat password')
    }
    else if (password2Value !== passwordValue) {
        setIncorrectFor(confirmPassword, 'password do not match')
    }
    else {
        setCorrect(confirmPassword)
    }
}
function setIncorrectFor(input, message) {
    const formOrder = input.parentElement;
    const small = formOrder.querySelector('small')
    small.innerText = message
    formOrder.className = 'form-order error'
}
function setCorrect(input){
    const formOrder = input.parentElement;
    formOrder.className= 'form-order correct'
}