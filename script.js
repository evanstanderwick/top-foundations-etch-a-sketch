// --- CONSTANTS ---
const INITIAL_SQUARES = 16;
const MIN_SQUARES = 1;
const MAX_SQUARES = 100;
const EDIT_GRID_ID = 'edit-grid-button';
const GRID_CONTAINER_ID = 'grid-container';
const GRID_TABLE_ID = 'grid-table'
const GRID_TD_CLASS = 'cell';


// --- FUNCTIONS ---
// create a (numSquares x numSquares) grid of divs, with cell effects
function createGrid(numSquares) {
    const gridContainer = document.getElementById(GRID_CONTAINER_ID);
    const gridTable = document.createElement('table');
    gridTable.setAttribute('id', GRID_TABLE_ID);
    for (i = 0; i < numSquares; i++) {
        const gridTableRow = document.createElement('tr');
        for (j = 0; j < numSquares; j++) {
            const gridTableData = document.createElement('td');
            gridTableData.classList.toggle(GRID_TD_CLASS);
            addCellEffects(gridTableData);
            gridTableRow.appendChild(gridTableData);
        }
        gridTable.appendChild(gridTableRow);
    }
    gridContainer.appendChild(gridTable);
}


// changes cell background color to red after being hovered on
function addCellEffects(cell){
    cell.addEventListener('mouseover', () => {
        console.log('getting here');
        cell.classList.add('hovered');
    });
}


// get a new grid size from the user, remove the old grid, and create a new grid
function resetGrid() {
    let numSquares = getNumSquares();
    removeGrid();
    createGrid(numSquares);
}


// prompt user for number of rows and columns until a valid number is entered
function getNumSquares() {
    let numSquares;
    while (true){
        numSquares = prompt('Number of rows and columns: ');
        if ((numSquares < MIN_SQUARES) || (numSquares > MAX_SQUARES)){
            alert(`Number must be between ${MIN_SQUARES} and ${MAX_SQUARES}`);
            continue;
        }
        break;
    }
    return numSquares;
}


// removes existing grid table from the grid container
function removeGrid() {
    const gridContainer = document.getElementById(GRID_CONTAINER_ID);
    const gridTable = document.getElementById(GRID_TABLE_ID);
    gridContainer.removeChild(gridTable);
}



// --- MAIN ---
createGrid(INITIAL_SQUARES);

const setSquaresButton = document.getElementById(EDIT_GRID_ID);
setSquaresButton.addEventListener('click', resetGrid);