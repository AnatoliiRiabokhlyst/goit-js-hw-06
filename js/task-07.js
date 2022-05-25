const rangeInput = document.querySelector('#font-size-control')
const output = document.querySelector('#text');
rangeInput.addEventListener('input', element => 
output.style.fontSize = `${element.target.value}px`)