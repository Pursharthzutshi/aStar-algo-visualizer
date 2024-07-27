import { useCallback, useEffect, useState } from "react";
import AStar from "../algorithim/Astar";
import createCell from "../util/CreateCell";
import GridComponent from "../GridComponent/GridComponent";

import "../GridComponent/GridComponent.css";
import {  gridType, TileType } from "../../types/CellTypes";

type NodeType = {
    row: number;
    col: number;
}

function PathFindingComponent() {
    const [resetAlgoStatus, setResetAlgoStatus] = useState<boolean>(false);
    const [startRowNode, setStartRowNode] = useState<number | null>(null);
    const [startColNode, setStartColNode] = useState<number | null>(null);
    const [endRowNode, setEndRowNode] = useState<number | null>(null);
    const [endColNode, setEndColNode] = useState<number | null>(null);
    const [grid, setGrid] = useState<gridType[][]>(createCell());
    const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);
    const [startNode, setStartNode] = useState<TileType | null>(null);
    const [endNode, setEndNode] = useState<TileType | null>(null);
    const [path, setPath] = useState<TileType[]>([]);



    const changeGridCell = (row: number, col: number) => {
        const newGridCell = grid.map((r, rowIndex) =>
            r.map((cell: gridType, colIndex: number) =>
                rowIndex === row && colIndex === col ? { ...cell, isPath: !cell.isPath, isTraversed: true } : cell,
            )
        );
        setGrid(newGridCell);
        if (startRowNode === null || startColNode === null) {
            setStartRowNode(row);
            setStartColNode(col);
            setStartNode(newGridCell[row][col]);
        } else {
            setEndRowNode(row);
            setEndColNode(col);
            setEndNode(newGridCell[row][col]);
        }

    };

    const runAlgorithm = useCallback(() => {
        if (startNode && endNode) {
            const newPath = AStar(grid, startNode, endNode);
            setPath(newPath || []);
            setResetAlgoStatus(true);

            newPath?.map((val: any, index: number) => {
                setTimeout(() => {
                    return grid[val.row][val.col].isTraversed = true
                }, index * 500)
            })


            console.log(newPath)
        }
    }, [grid, startNode, endNode]);

    useEffect(() => {
        timeouts.forEach(timeout => clearTimeout(timeout));
        setTimeouts([]);

        if (path.length > 0) {
            const newTimeouts: NodeJS.Timeout[] = path.map((node: NodeType, index: number) =>
                setTimeout(() => {
                    changeGridCell(node.row, node.col);
                }, index * 500)
            );
            setTimeouts(newTimeouts);
        }
    }, [path]);

    const resetAlgorithim = () => {
        setStartNode(null);
        setStartRowNode(null);
        setStartColNode(null)
        setEndNode(null);
        setPath([]);
        setResetAlgoStatus(false);
        setGrid(createCell());
    };

    return (
        <div className="grid">
            {
                resetAlgoStatus ?
                    <button className="reset-path-button" onClick={resetAlgorithim}>Reset</button> :
                    <button className="find-path-button" onClick={runAlgorithm}>Find Path</button>
            }
            <GridComponent grid={grid} changeGridCell={changeGridCell} />
        </div>
    );
}

export default PathFindingComponent;