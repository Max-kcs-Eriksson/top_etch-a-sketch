const drawPad = document.querySelector('.drawing-pad');
const drawPadWidthPX = drawPad.style.getPropertyValue('width'); // Height = Width
const drawPadWidthNum = drawPadWidthPX.slice(0, -2); // Slice last two chars ('px')
console.log('drawPadWidthPX: ' + drawPadWidthPX);
console.log('drawPadWidthNum: ' + drawPadWidthNum);



/* User selects X-& Y-axis */
const setAxisSlider = document.querySelector('#set-x-y');
const axisSliderValue = document.querySelector('#display-x-y');

// Displays value on range input
setAxisSlider.oninput = () => {
    axisSliderValue.textContent = `${setAxisSlider.value}x${setAxisSlider.value}`;
}
/* Confirms axisSliderValue and created grid of drawBox with set X-& Y-axis */
const setAxisButton = document.querySelector('#confirm-x-y');
setAxisButton.addEventListener('click', () => {
    // Old draw box nodes
    const oldDrawBoxes = document.querySelectorAll('.draw-box');
    const oldDrawBox = document.querySelector('.draw-box');
    // TODO
    // Remove old grid of boxes
    // const oldDrawBoxes = document.querySelectorAll('.draw-box');
    // const oldDrawBox = document.querySelector('.draw-box');

    // If no oldDrawBox exist, run below code:
    if (!oldDrawBox) {
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
            console.log('Box Width: ' + drawBoxWidth + 'px');

        const drawBoxes = document.querySelectorAll('.draw-box');

        function addMouseMove() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.addEventListener('mousemove', paintBox);
            }));
        }
        
        function removeMouseMove() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.removeEventListener('mousemove', paintBox);
            }));
        }
        // drawBoxes.forEach((div => {
        //     /* Set style property: width & height */
        //     div.style.width = `${drawBoxWidth}px`;
        //     div.style.height = `${drawBoxWidth}px`;
        //     /* Add mouseenter event listener for each box */
        //     div.addEventListener('mousemove', paintBox);
        // }));
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseMove);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseMove);
        }));
    // If oldDrawBox do exist, run below code:
    } else {
        // Remove last child of drawPad for oldDrawBoxes.length number of times
        for (let i = 0; i < oldDrawBoxes.length; i++) {
            drawPad.removeChild(drawPad.lastChild);
        }

        /* SAME CODE AS if (!oldDrawBox) */
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
            console.log('Box Width: ' + drawBoxWidth + 'px');

        const drawBoxes = document.querySelectorAll('.draw-box');

        function addMouseMove() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.addEventListener('mousemove', paintBox);
            }));
        }
        
        function removeMouseMove() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.removeEventListener('mousemove', paintBox);
            }));
        }
        // drawBoxes.forEach((div => {
        //     /* Set style property: width & height */
        //     div.style.width = `${drawBoxWidth}px`;
        //     div.style.height = `${drawBoxWidth}px`;
        //     /* Add mouseenter event listener for each box */
        //     div.addEventListener('mousemove', paintBox);
        // }));
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseMove);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseMove);
        }));

    }



    console.log('***TESTING***');
    console.log('oldDrawBox exist: ' + oldDrawBox);
    console.log('oldDrawBoxes exist: ' + oldDrawBoxes);
    console.log('oldDrawBoxes DOM list length: ' + oldDrawBoxes.length);
    console.log('***TESTING***');
});


/* Erase button */
    /* Removes color specific class names of all boxes */


function paintBox() {
    this.classList.add('painted');
};