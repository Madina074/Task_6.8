let form = document.querySelector('#form');
let textInput = document.querySelector('#textInput');
let text = document.querySelector('#duplicateField');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(textInput.value);
    text.textContent = '';
    form.reset();
});
textInput.addEventListener('change', () => {
    text.textContent = textInput.value;
});