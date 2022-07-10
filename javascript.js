const DRAW_PAD_WIDTH_PX = 800; // Height = Width
const drawPad = document.querySelector('.drawing-pad');

/* User press 'SET X&Y' */
    /* Prompt to set number of boxes on X & Y axis */
        /* X axis = Y axis */
    // FOR TESTING ONLY
    const xAxis = 2;
    // const xAxis = 16;
    const yAxis = xAxis;
    //    TO HERE
    /* Loop creates and appends (xAxis * yAxis) boxes in DOM node ('.drawing-pad')*/
        // FOR TESTING ONLY
        const drawBox = document.createElement('div');
        drawBox.classList.add('draw-box');
        drawPad.appendChild(drawBox);
        //    TO HERE
        /* Set style property: width & height */
            /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
            const boxWidth = DRAW_PAD_WIDTH_PX / xAxis;
            console.log('X Axis num of Boxes: ' + xAxis);
            console.log('Y Axis num of Boxes: ' + yAxis);
            console.log('Box Width: ' + boxWidth);
            drawBox.style.width = `${boxWidth}px`; // FIX
            drawBox.style.height = `${boxWidth}px`; // FIX
        /* Boxes wrap to fit '.drawing-pad' */
        /* Add hover event listener for each box */
        const drawBoxes = document.querySelectorAll('.draw-box');
        drawBoxes.forEach((div => {
            div.addEventListener('mouseenter', paintBox)
        }));

            /* Add color specific class name on hover */

/* Erase button */
    /* Removes color specific class names of all boxes */
function paintBox() {
    this.classList.add('painted');
};