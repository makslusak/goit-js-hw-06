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

// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', formValidation);

// function formValidation(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const userProfile = {};

//     for (const value of formData.values()) {
//         const validValue = value.trim();
//         console.log(formData.keys().next());
//         if (!validValue) {
//             alert('Всі поля мають бути заповнені!');
//             return;
//         }

//         userProfile[key] = validValue;
//     }

//     formData.forEach((value, key) => {
//         const validValue = value.trim();

//         if (!validValue) {
//             alert('Всі поля мають бути заповнені!');
//         }
//         userProfile[key] = validValue;
//     });

//     console.dir(userProfile);
//     formEl.reset();
// }
