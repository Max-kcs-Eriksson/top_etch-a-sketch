const drawPad = document.querySelector('.drawing-pad');
const drawPadWidthPX = drawPad.style.getPropertyValue('width'); // Height = Width
const drawPadWidthNum = drawPadWidthPX.slice(0, -2); // Slice last two chars ('px')
console.log('drawPadWidthPX: ' + drawPadWidthPX);
console.log('drawPadWidthNum: ' + drawPadWidthNum);

let drawStyleButtons = document.querySelectorAll('.draw-style-btn');
let drawStyle;

/* User selects value of "h" */
const setColorSlider = document.querySelector('#set-color');
const colorSliderValue = document.querySelector('#display-color');

let alphaValue = 1;

// Displays hsl color on range input
setColorSlider.oninput = () => {
    let hValue = setColorSlider.value;
    colorSliderValue.style.background = `hsla(${hValue}, 100%, 50%, 1)`;
};


function setDrawStyle() {
    drawStyle  = this.id;
    console.log('Active drawStyle: ' + drawStyle);
};
/* User selects draw style */
    // Event listener forEach 'draw-style-btn' that change 'drawStyle' variable
    drawStyleButtons.forEach((button => {
        button.addEventListener('click', setDrawStyle);
    }));
        // Color
            // drawStyle = '';
        // Black
            // drawStyle = 'black';
        // Shading
            // drawStyle = 'shading';
        // Rainbow
            // drawStyle = 'rainbow';


/* User selects X-& Y-axis */
const setAxisSlider = document.querySelector('#set-x-y');
const axisSliderValue = document.querySelector('#display-x-y');

// Displays value on range input
setAxisSlider.oninput = () => {
    axisSliderValue.textContent = `${setAxisSlider.value}x${setAxisSlider.value}`;
};
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
            drawBox.style.background = `rgba(215, 235, 255, ${alphaValue})`;
            drawPad.appendChild(drawBox);
        };

        /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
        const drawBoxWidth = drawPadWidthNum / xAxis;
            console.log('X Axis num of Boxes: ' + xAxis);
            console.log('Y Axis num of Boxes: ' + yAxis);
            console.log('Box Width: ' + drawBoxWidth + 'px');

        const drawBoxes = document.querySelectorAll('.draw-box');

        function addMouseEnter() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.addEventListener('mouseenter', paintBox);
            }));
        };
        
        function removeMouseEnter() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.removeEventListener('mouseenter', paintBox);
            }));
        };
        // drawBoxes.forEach((div => {
        //     /* Set style property: width & height */
        //     div.style.width = `${drawBoxWidth}px`;
        //     div.style.height = `${drawBoxWidth}px`;
        //     /* Add mouseenter event listener for each box */
        //     div.addEventListener('mouseenter', paintBox);
        // }));
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseEnter);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseEnter);
        }));
    // If oldDrawBox do exist, run below code:
    } else {
        // Remove last child of drawPad for oldDrawBoxes.length number of times
        for (let i = 0; i < oldDrawBoxes.length; i++) {
            drawPad.removeChild(drawPad.lastChild);
        };

        /* SAME CODE AS if (!oldDrawBox) */
        const xAxis = setAxisSlider.value;
        const yAxis = xAxis;
        
        const drawBoxTotal = xAxis * yAxis;
            console.log('Total num boxes ' + drawBoxTotal);

        /* Loop creates and appends (xAxis * yAxis) boxes in DOM node ('.drawing-pad')*/
        for (let i = 0; i < drawBoxTotal; i++) {
            const drawBox = document.createElement('div');
            drawBox.classList.add('draw-box');
            drawBox.style.background = `rgba(215, 235, 255, ${alphaValue})`;
            drawPad.appendChild(drawBox);
        };

        /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
        const drawBoxWidth = drawPadWidthNum / xAxis;
            console.log('X Axis num of Boxes: ' + xAxis);
            console.log('Y Axis num of Boxes: ' + yAxis);
            console.log('Box Width: ' + drawBoxWidth + 'px');

        const drawBoxes = document.querySelectorAll('.draw-box');

        function addMouseEnter() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.addEventListener('mouseenter', paintBox);
            }));
        };
        
        function removeMouseEnter() {
            drawBoxes.forEach((div => {
                /* Set style property: width & height */
                div.style.width = `${drawBoxWidth}px`;
                div.style.height = `${drawBoxWidth}px`;
                /* Add mouseenter event listener for each box */
                div.removeEventListener('mouseenter', paintBox);
            }));
        };
        // drawBoxes.forEach((div => {
        //     /* Set style property: width & height */
        //     div.style.width = `${drawBoxWidth}px`;
        //     div.style.height = `${drawBoxWidth}px`;
        //     /* Add mouseenter event listener for each box */
        //     div.addEventListener('mouseenter', paintBox);
        // }));
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseEnter);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseEnter);
        }));

    };



    console.log('***TESTING***');
    console.log('oldDrawBox exist: ' + oldDrawBox);
    console.log('oldDrawBoxes exist: ' + oldDrawBoxes);
    console.log('oldDrawBoxes DOM list length: ' + oldDrawBoxes.length);
    console.log('***TESTING***');
});


/* Erase button */
    /* Removes color specific class names of all boxes */


function paintBox() {
    // this.classList.add('painted');
    if (drawStyle === 'black') {
        alphaValue = 1;
        this.style.background = `rgba(0, 0, 0 , ${alphaValue})`;
        // console.log('Current alphaValue: ' + alphaValue);
    } else if (drawStyle === 'shading') {
        alphaValue = 1;
        let rgba = this.style.getPropertyValue('background');
        console.log('rgba: ' + rgba);
        console.log('type of rgba: ' + typeof rgba);

        let rgbaTemp1 = rgba.slice(4);
        console.log(rgbaTemp1);
        let rgbaTemp2 = rgbaTemp1.slice(0, -1);
        console.log(rgbaTemp2);

        let rgbaValues = rgbaTemp2.split(",");
        console.log('rgbaValues: ' + rgbaValues);
        console.log('type of rgbaValues: ' + typeof rgbaValues);
        


        let r = rgbaValues[0];
        console.log('R: ' + r);
        r = parseFloat(r);
        console.log('R: ' + r);
        r *= .9;
        console.log('Array Index (R): ' + rgbaValues[0]);
        console.log('R: ' + r);

        let g = rgbaValues[1];
        console.log('G: ' + g);
        g = parseFloat(g);
        console.log('G: ' + g);
        g *= .9;
        console.log('Array Index (G): ' + rgbaValues[1]);
        console.log('G: ' + g);

        let b = rgbaValues[2];
        console.log('B: ' + b);
        b = parseFloat(b);
        console.log('B: ' + b);
        b *= .9;
        console.log('Array Index (B): ' + rgbaValues[2]);
        console.log('B: ' + b);
        
        
        this.style.background = `rgba(${r}, ${g}, ${b}, ${alphaValue})`;
    } else if (drawStyle === 'rainbow') {
        alphaValue = 1;

        hValue = getRandomInt(0, 359);
        this.style.background = `hsla(${hValue}, 100%, 50%, ${alphaValue})`;
    } else if (drawStyle === 'color') {
        hValue = setColorSlider.value;
        this.style.background = `hsla(${hValue}, 100%, 50%, ${alphaValue})`;
    }
};

/* Returns a random integer between min (inclusive) and max (inclusive) */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}