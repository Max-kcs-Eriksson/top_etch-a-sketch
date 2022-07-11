const drawPad = document.querySelector('.drawing-pad');
const drawPadWidthPX = drawPad.style.getPropertyValue('width'); // Height = Width
const drawPadWidthNum = drawPadWidthPX.slice(0, -2); // Slice last two chars ('px')
console.log('drawPadWidthPX: ' + drawPadWidthPX);
console.log('drawPadWidthNum: ' + drawPadWidthNum);


/* User press 'SET X&Y' */
const setAxisButton = document.querySelector('#set-x-y');
setAxisButton.addEventListener('click', () => {
    /* Prompt to set number of boxes on X & Y axis */
    const xAxis = Number(prompt('Enter desired number of boxes for X& Y axis', ));
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