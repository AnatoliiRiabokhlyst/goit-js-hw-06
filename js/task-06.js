const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length)

function changeClass (add, remove) {
    inputEl.classList.remove(remove);
    inputEl.classList.add(add);
}
inputEl.addEventListener("blur", (event) => {
    event.currentTarget.value.trim().length === inputLength ? changeClass('valid', 'invalid') : changeClass('invalid', 'valid')
    });


    