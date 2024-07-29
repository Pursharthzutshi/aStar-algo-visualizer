import CellComponent from '../CellComponent/CellComponent';
import { cellTypes, GridType } from '../../types/CellTypes';

import './GridComponent.css';
import "../CellComponent/CellComponent.css"

function GridComponent({ grid, blockedCell, removeSelectedBlockedCell, changeGridCell }: cellTypes) {

    return (
        <div className="grid">
            {grid.map((row: GridType[], rowIndex: number) => (
                <div key={rowIndex} className="row">
                    {row.map((cell: GridType) => (
                        <CellComponent
                            cell={cell}
                            changeGridCell={changeGridCell}
                            blockedCell={blockedCell} removeSelectedBlockedCell={removeSelectedBlockedCell} 
                            isTraversed={false} 
                            isStart={false}
                            isEnd={false}
                            isWall={false}
                            isPath={false}
                            isVisitedOnce={false}
                            />
                    ))}
                </div>
            ))}
            <br></br>
        </div>

    )
}


export default GridComponent;
