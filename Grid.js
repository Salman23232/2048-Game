const GRID_SIZE = 2;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
    #Cells
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    this.#Cells = createCellElement(gridElement).map((cellElement, index) =>{
        return new Cell(
            cellElement,
            index % CELL_SIZE,
            Math.floor(index / CELL_SIZE)
        )
        
    })
}
}

class Cell {
    constructor(cellElement, x, y){
        this.cellElement = cellElement;
        this.x = x;
        this.y = y;

    }
}

function createGridElement(gridElement) {
    const cells = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const newCell = document.createElement("div")
        newCell.classList.add("cell")
        cells.push(newCell)
        gridElement.append(newCell)
        
    }
    return cells
}

