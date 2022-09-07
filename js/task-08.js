const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formValidation);

function formValidation(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const validEmail = email.value.trim();
    const validPassword = password.value.trim();

    if (!validEmail || !validPassword) {
        alert('Всі поля мають бути заповнені!');
    }
    const userProfile = {
        email: validEmail,
        password: validPassword,
    };
    console.dir(userProfile);
    formEl.reset();
}
