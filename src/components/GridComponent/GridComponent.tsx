import CellComponent from '../CellComponent/CellComponent';

import './GridComponent.css';
import "../CellComponent/CellComponent.css"
import { gridType } from '../../types/CellTypes';

export type cellTypes = {
  grid:gridType[][]
  changeGridCell: (row: number, col: number) => void; 
}

function GridComponent({ grid, changeGridCell }: cellTypes) {
    return (
        <div className="grid">
            {grid.map((row: gridType[], rowIndex: number) => (
                <div key={rowIndex} className="row">
                    {row.map((cell: gridType, colIndex: number) => (
                        <CellComponent
                            isStart={cell.isStart}
                            isEnd={cell.isEnd}
                            isWall={cell.isWall}
                            isPath={cell.isPath}
                            isTraversed={cell.isTraversed}
                            key={colIndex}
                            cell={cell}
                            onClick={changeGridCell}
                        />
                    ))}

                </div>
            ))}
        </div>

    )
}


export default GridComponent;
