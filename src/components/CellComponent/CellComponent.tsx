
import { gridType } from "../../types/CellTypes";
import "../CellComponent/CellComponent.css"

interface CellComponentProps {
    cell: gridType;
    isTraversed: boolean
    isStart: boolean
    isEnd: boolean
    isWall: boolean
    isPath: boolean
    onClick: (row: number, col: number) => void;
}

function CellComponent({ cell, isStart, isEnd, isTraversed, isWall, isPath, onClick }: CellComponentProps) {

    // const extraClassName = isStart ? 'cell-start' : isEnd ? 'cell-end' : isWall ? 'cell-wall' : isPath ? 'cell-path' : '';
    const extraClassName =  isPath ? 'cell-path' : '';
    const blockedStateClassName = !cell.isPath ? "blocked" : "non-blocked"

    const traveresdPaths = isTraversed ? "traversed" : "not-traversed"

    const handleClick = () => {
        onClick(cell.row, cell.col);
    };

    return (
        <div>
            <div id={traveresdPaths} className={`cell ${extraClassName}`} onClick={handleClick}></div>
        </div>
    )
}

export default CellComponent;