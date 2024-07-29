
import { CellComponentProps } from "../../types/CellTypes";
import "../CellComponent/CellComponent.css"


function CellComponent({ cell, changeGridCell, blockedCell, removeSelectedBlockedCell }: CellComponentProps) {

    // CLASSNAMES 

    const start = cell.isStart ? 'cell-start' : '';
    const end = cell.isEnd ? 'cell-end' : '';
    const wall = cell.isWall ? 'cell-wall' : '';
    const path = cell.isPath ? 'cell-path' : '';
    const traversed = (cell.isStart || cell.isEnd) ? "" : (cell.isTraversed ? "cell-traversed" : '');

    // SETTING UP CLASSESS

    const cellClass = `cell ${start} ${end} ${wall} ${path} ${traversed}`;

    // GRID CELL 

    const handleClick = () => {
        changeGridCell(cell.row, cell.col);
    };

    // BLOCKED CELL COORDINATES

    const setUpBlockedCell = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log(cell.isWall)
        // if (cell.isWall) {
        //     removeSelectedBlockedCell(cell.row, cell.col)
        // }
        if (!cell.isWall) {
            blockedCell(cell.row, cell.col)
        } else {
            removeSelectedBlockedCell(cell.row, cell.col)
        }
    }

    return (
        <div>
            <div onContextMenuCapture={setUpBlockedCell} className={`${cellClass}`} onClick={handleClick}></div>
        </div>
    )
}

export default CellComponent;