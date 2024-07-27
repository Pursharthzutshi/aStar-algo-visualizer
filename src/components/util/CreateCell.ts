import {  gridType } from "../../types/CellTypes";

function createCell({sampleGridTestValues}:any = []): gridType[][] {
    const rows = 10;
    const cols = 10;
    const grid: gridType[][] = []



    for (let row = 0; row < rows; row++) {
        const currentRow: gridType[]  = []
        for (let col = 0; col < cols; col++) {
            currentRow.push({
                row, col,
                isStart: row === 1 && col === 1,
                isEnd: row === rows - 1 && col === cols - 1, // End at bottom-right corner
                isWall: false,
                isPath: false,
                isTraversed:false,
                gScore: Infinity,
                hScore: Infinity,
                fScore: Infinity,
                parent: null,
           

            })
        }
        grid.push(currentRow);

    }
    return grid;
}

export default createCell