import { GridType } from "../../types/CellTypes";

function createCell(): GridType[][] {
    const rows = 7;
    const cols = 20;
    const grid: GridType[][] = []

    for (let row = 0; row < rows; row++) {
        const currentRow: GridType[] = []
        for (let col = 0; col < cols; col++) {
            currentRow.push({
                row, col,
                isStart: false,
                isEnd: false,
                isWall: false,
                isPath: false,
                isSelect: false,
                isTraversed: false,
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