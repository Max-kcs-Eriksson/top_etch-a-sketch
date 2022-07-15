const drawPad = document.querySelector('.drawing-pad');
const drawPadWidthPX = drawPad.style.getPropertyValue('width'); // Height = Width
const drawPadWidthNum = drawPadWidthPX.slice(0, -2); // Slice last two chars ('px

let drawStyleButtons = document.querySelectorAll('.draw-style-btn');
let drawStyle;

let r,
    g,
    b,
    alphaValue;

/* User selects value of "h" */
const setColorSlider = document.querySelector('#set-color');
const colorSliderValue = document.querySelector('#display-color');

alphaValue = 1;

// Displays hsl color on range input
setColorSlider.oninput = () => {
    let hValue = setColorSlider.value;
    colorSliderValue.style.background = `hsla(${hValue}, 100%, 50%, 1)`;
};


function setDrawStyle() {
    drawStyle  = this.id
};
/* User selects draw style */
    // Event listener forEach 'draw-style-btn' that change 'drawStyle' variable
    drawStyleButtons.forEach((button => {
        button.addEventListener('click', setDrawStyle);
    }));

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

    // If no oldDrawBox exist, run below code:
    if (!oldDrawBox) {
        const xAxis = setAxisSlider.value;
        const yAxis = xAxis;
        
        const drawBoxTotal = xAxis * yAxis;


        /* Loop creates and appends (xAxis * yAxis) boxes in DOM node ('.drawing-pad')*/
        for (let i = 0; i < drawBoxTotal; i++) {
            const drawBox = document.createElement('div');
            drawBox.classList.add('draw-box');
            drawBox.style.background = `rgba(215, 235, 255, .99)`;
            drawPad.appendChild(drawBox);
        };

        /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
        const drawBoxWidth = drawPadWidthNum / xAxis;




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
        
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseEnter);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseEnter);
        }));

        /* Erase button */
        const eraseButton = document.querySelector('#erase-drawing');
        eraseButton.addEventListener('click', () => {
            // Decrement alphaValue for each div of drawBoxes until transparent using for loop
            for (let i = 0; i < 10; i++) {
                drawBoxes.forEach((div => {
                    let rgba = div.style.getPropertyValue('background');

                    // Slice out only the number values separated by comma points
                    let rgbaTemp1 = rgba.slice(5);
                    let rgbaTemp2 = rgbaTemp1.slice(0, -1);

                    let rgbaValues = rgbaTemp2.split(",");

                    let rValue = rgbaValues[0];
                    rValue = parseFloat(rValue);

                    let gValue = rgbaValues[1];
                    gValue = parseFloat(gValue);

                    let bValue = rgbaValues[2];
                    bValue = parseFloat(bValue);

                    alphaValue = rgbaValues[3];
                    alphaValue = parseFloat(alphaValue);

                    alphaValue -= .1;

                    div.style.background = `rgba(${rValue}, ${gValue}, ${bValue}, ${alphaValue})`;
                }));
            };

            drawBoxes.forEach((div => {
                div.style.background = `rgba(215, 235, 255, .99)`;
            }));
        });


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


        /* Loop creates and appends (xAxis * yAxis) boxes in DOM node ('.drawing-pad')*/
        for (let i = 0; i < drawBoxTotal; i++) {
            const drawBox = document.createElement('div');
            drawBox.classList.add('draw-box');
            drawBox.style.background = `rgba(215, 235, 255, .99)`;
            drawPad.appendChild(drawBox);
        };

        /* Box width and height are calculated based on '.drawing-pad' size and number of boxes */
        const drawBoxWidth = drawPadWidthNum / xAxis;




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
        
        drawBoxes.forEach((div => {
            /* Set style property: width & height */
            div.style.width = `${drawBoxWidth}px`;
            div.style.height = `${drawBoxWidth}px`;
            /* Add mouseenter event listener for each box */
            div.addEventListener('mousedown', addMouseEnter);
            div.addEventListener('mousedown', paintBox);
            div.addEventListener('mouseup', removeMouseEnter);
        }));


        /* Erase button */
        const eraseButton = document.querySelector('#erase-drawing');
        eraseButton.addEventListener('click', () => {
            // Decrement alphaValue for each div of drawBoxes until transparent using for loop
            for (let i = 0; i < 10; i++) {
                drawBoxes.forEach((div => {
                    let rgba = div.style.getPropertyValue('background');

                    // Slice out only the number values separated by comma points
                    let rgbaTemp1 = rgba.slice(5);
                    let rgbaTemp2 = rgbaTemp1.slice(0, -1);

                    let rgbaValues = rgbaTemp2.split(",");

                    let rValue = rgbaValues[0];
                    rValue = parseFloat(rValue);

                    let gValue = rgbaValues[1];
                    gValue = parseFloat(gValue);

                    let bValue = rgbaValues[2];
                    bValue = parseFloat(bValue);

                    alphaValue = rgbaValues[3];
                    alphaValue = parseFloat(alphaValue);

                    alphaValue -= .1;

                    div.style.background = `rgba(${rValue}, ${gValue}, ${bValue}, ${alphaValue})`;
                }));
            };

            drawBoxes.forEach((div => {
                div.style.background = `rgba(215, 235, 255, .99)`;
            }));
        });
    };
});

function paintBox() {
    // this.classList.add('painted');
    if (drawStyle === 'black') {
        alphaValue = .99;
        this.style.background = `rgba(0, 0, 0 , ${alphaValue})`;
    } else if (drawStyle === 'shading') {
        alphaValue = .99;

        let rgba = this.style.getPropertyValue('background');

        let rgbaTemp1 = rgba.slice(5);
        let rgbaTemp2 = rgbaTemp1.slice(0, -1);

        let rgbaValues = rgbaTemp2.split(",");

        let r = rgbaValues[0];
        r = parseFloat(r);
        r *= .9;

        let g = rgbaValues[1];
        g = parseFloat(g);
        g *= .9;

        let b = rgbaValues[2];
        b = parseFloat(b);
        b *= .9;
        
        this.style.background = `rgba(${r}, ${g}, ${b}, ${alphaValue})`;
    } else if (drawStyle === 'rainbow') {
        alphaValue = .99;

        hValue = getRandomInt(0, 359);
        this.style.background = `hsla(${hValue}, 100%, 50%, ${alphaValue})`;
    } else if (drawStyle === 'color') {
        alphaValue = .99;

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

function getRgbaNumValues (target) {
    
    let rgba = target.style.getPropertyValue('background');

    // Slice out only the number values separated by comma points
    let rgbaTemp1 = rgba.slice(5);
    let rgbaTemp2 = rgbaTemp1.slice(0, -1);

    let rgbaValues = rgbaTemp2.split(",");

    let r = rgbaValues[0];
    r = parseFloat(r);

    let g = rgbaValues[1];
    g = parseFloat(g);

    let b = rgbaValues[2];
    b = parseFloat(b);

    let a = rgbaValues[3];
    a = parseFloat(a);
}