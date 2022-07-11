const drawPad = document.querySelector('.drawing-pad');
const drawPadWidthPX = drawPad.style.getPropertyValue('width'); // Height = Width
const drawPadWidthNum = drawPadWidthPX.slice(0, -2); // Slice last two chars ('px')
console.log('drawPadWidthPX: ' + drawPadWidthPX);
console.log('drawPadWidthNum: ' + drawPadWidthNum);


/* User selects X-& Y-axis */
const setAxisSlider = document.querySelector('#set-x-y');
const axisSliderValue = document.querySelector('#display-x-y');

setAxisSlider.oninput = () => {
    axisSliderValue.textContent = setAxisSlider.value;
}
/* Confirms axisSliderValue and created grid of drawBox with set X-& Y-axis */
const setAxisButton = document.querySelector('#confirm-x-y');
setAxisButton.addEventListener('click', () => {
    const xAxis = setAxisSlider.value;
    const yAxis = xAxis;
    
    const drawBoxTotal = xAxis * yAxis;
        console.log('Total num boxes ' + drawBoxTotal);

    /* Loop creates and appends (xAxis * yAxis) boxes in DOM node ('.drawing-pad')*/
    for (let i = 0; i < drawBoxTotal; i++) {
        const drawBox = document.createElement('div');
        drawBox.classList.add('draw-box');
        drawPad.appendChild(drawBox);
    };

    /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
    const drawBoxWidth = drawPadWidthNum / xAxis;
        console.log('X Axis num of Boxes: ' + xAxis);
        console.log('Y Axis num of Boxes: ' + yAxis);
        console.log('Box Width: ' + drawBoxWidth);

    const drawBoxes = document.querySelectorAll('.draw-box');
    drawBoxes.forEach((div => {
        /* Set style property: width & height */
        div.style.width = `${drawBoxWidth}px`;
        div.style.height = `${drawBoxWidth}px`;
        /* Add mouseenter event listener for each box */
        div.addEventListener('mouseenter', paintBox)
    }));




});


/* Erase button */
    /* Removes color specific class names of all boxes */


function paintBox() {
    this.classList.add('painted');
};