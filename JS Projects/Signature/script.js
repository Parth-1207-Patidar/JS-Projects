let backgroundColor = document.getElementById('backgroundColor');
let textColor = document.getElementById('textColor');
let signaturePad = document.getElementById('signaturePad');
let lineWidth = document.getElementById('lineWidth');
let clearButton = document.getElementById('clear');
let saveButton = document.getElementById('save');
let retrieveButton = document.getElementById('retrieve');
let ctx = signaturePad.getContext('2d');
let isDrawing;

backgroundColor.addEventListener('change', () => {
    let color = backgroundColor.value;
    signaturePad.style.backgroundColor = color;
});

textColor.addEventListener('change', () => {
    ctx.strokeStyle = textColor.value;
    ctx.fillStyle = textColor.value;
});

lineWidth.addEventListener('change', () => {
    ctx.lineWidth = parseInt(lineWidth.value);
});

//signature pad

signaturePad.addEventListener('mousedown', () => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

signaturePad.addEventListener('mousemove', () => {
    if (isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        lastX = event.offsetX;
        lastY = event.offsetY;
    }
})

signaturePad.addEventListener('mouseup', () => {
    isDrawing = false;
});

signaturePad.addEventListener('mouseout', () => {
    isDrawing = false;
});

//buttons

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, signaturePad.width, signaturePad.height);
});

saveButton.addEventListener('click', () => {
    localStorage.setItem('signature', signaturePad.toDataURL());

    let link = document.createElement('a');

    link.download = 'signature.png';

    link.href = signaturePad.toDataURL();

    link.click();
});

retrieveButton.addEventListener('click', () => {
    let signature = localStorage.getItem('signature');

    if (signature){
        let image = new Image();

        image.src = signature;
        ctx.drawImage(image, 0, 0);
    }
});