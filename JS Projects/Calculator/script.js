const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        if (button.getAttribute('id') === 'clear'){
            display.textContent = '';
        }
        else if (button.getAttribute('id') === 'equal'){
            display.textContent = eval(display.textContent);
        }
        else if (button.getAttribute('id') === 'remove'){
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (button.getAttribute('id') === 'percent'){
            display.textContent = display.textContent / 100;
        }
        else{
            display.innerText += button.textContent;
        }
    })
})