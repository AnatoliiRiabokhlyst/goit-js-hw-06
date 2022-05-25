const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
decrement.addEventListener('click', (decrement) => {
    counterValue -= 1;
    return value.textContent = counterValue;
})
increment.addEventListener('click', (increment) => {
    counterValue += 1;
    return value.textContent = counterValue;
})