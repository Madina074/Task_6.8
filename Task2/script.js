const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener("click", () => {
    alert('Метод вывода сообщения в веб-консоль');
})

const aler = document.querySelector('#alert');
aler.addEventListener('click', () => {
    alert("Вывод модального окна");
})

const promp = document.querySelector('#prompt');
promp.addEventListener('click', () => {
    prompt('Вывод модального окна с полем для ввода');
})