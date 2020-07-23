
var setSize = document.getElementById('sizePicker');        // select size input form
var setColor = document.querySelector('#colorPicker');      // select color input
var heightInput = document.querySelector('#inputHeight');   // store height input into variable
var widthInput = document.querySelector('#inputWidth');     // store grid width input into variable
var table = document.getElementById('pixelCanvas');         // selects table element and creates a canvas variable 

setSize.addEventListener('submit', function(event) {        // add event listener for submitting grid size
    event.preventDefault();                                 // prevent reloading of page on 'submit'
    makeGrid(heightInput.value, widthInput.value);          // calls makeGrid function with values from user
    });


function makeGrid(height, width) {
    clearCanvas();                                      // remove old coloring from grid

        for (var i = 0; i < height; i++) {              // outer loop to generate rows on the table element
            let row = table.insertRow(i);

            for (var j = 0; j < width; j++) {           // inner loop to generate cells
                let cell = row.insertCell(j);
                    cell.addEventListener('click', function (event) {   // event listener added for changing cell color
                    cell.style.backgroundColor = setColor.value;        // set color for each cell using value from color picker
            });
        }
    }
}

function clearCanvas() {                                // function to reset table when makeGrid is called
    for(var i = 0; i < table.rows.length;) {   
        table.deleteRow(i);
    }
}