const userText = prompt('Введите текст');
const changeURL = document.querySelector('#changeURL')
changeURL.addEventListener('click', (event) => {
    console.log('Текст в body изменён на', userText);
    event.preventDefault();  
})