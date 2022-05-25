const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(input, output)
input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value || "Anonymous";
  });