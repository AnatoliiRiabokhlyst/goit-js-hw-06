const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    alert('Fill in required fields');
    return
    };
    const dataForm = {
    Email: email.value,
    Password: password.value,
    };
    console.log(dataForm);
    form.reset()
});
