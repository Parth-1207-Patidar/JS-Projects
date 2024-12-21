let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let whichKey = document.getElementById('whichKey');
let keyState = document.getElementById('keyState');

const keyDownHandler = (event) => {
    keyState.textContent = 'Keydown';
    whichKey.textContent = `Key: ${event.key}`;
};

const keyUpHandler = (event) => {
    keyState.textContent = 'Keyup';
    whichKey.textContent = `Key: ${event.key}`;
};

const startReading = () => {
    console.log('Reading started');
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

const stopReading = () => {
    console.log('Reading stopped');
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    whichKey.textContent = '';
    keyState.textContent = '';
    startBtn.disabled = false;
    stopBtn.disabled = true;
};