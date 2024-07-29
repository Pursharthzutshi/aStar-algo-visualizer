import { useCallback, useState } from "react";
import { GridType, TileType } from "../../types/CellTypes";
import { useAppDispatch, useAppSelector } from "../../ReduxHooks";
import { setFindPathStatus, setResetAlgoStatus, setResetPointsButtonStatus } from "../../ReduxSlicers/AlgorithimSlicer";

import GridComponent from "../GridComponent/GridComponent";
import AStar from "../algorithim/Astar";
import createCell from "../util/CreateCell";
import Notations from "./Notations";

import "./PathFindingComponent.css"

function PathFindingComponent() {

    // USE STATES

    const [startNode, setStartNode] = useState<GridType | null>(null);
    const [endNode, setEndNode] = useState<GridType | null>(null);

    const [timeoutIds, setTimeoutIds] = useState<ReturnType<typeof setTimeout>[]>([]);

    const [grid, setGrid] = useState(createCell())

    // USE SELECTORS

    const resetAlgoStatus = useAppSelector((state) => state.AlgorithimSlicer.resetAlgoStatus)
    const findPathStatus = useAppSelector((state) => state.AlgorithimSlicer.findPathStatus)
    const resetPointsButtonStatus = useAppSelector((state) => state.AlgorithimSlicer.resetPointsButtonStatus)

    const Dispatch = useAppDispatch()


    // UPDATE GRID CELLS 

    const updateGridCell = (row: number, col: number, updates: Partial<GridType>): GridType[][] => {
        return grid.map((rowArray, rowIndex) => {
            return rowArray.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    return { ...cell, ...updates };
                }
                return cell;
            })
        })
    }

    // CHANGE GRID CELLS

    const changeGridCell = (row: number, col: number) => {

        if (!startNode) {
            const newGridCell: GridType[][] = updateGridCell(row, col, { isStart: true, isEnd: false, isWall: false })
            setStartNode(newGridCell[row][col]);
            setGrid(newGridCell)
        } else if (!endNode) {
            const newGridCell: GridType[][] = updateGridCell(row, col, { isStart: false, isEnd: true, isWall: false })
            setEndNode(newGridCell[row][col]);
            setGrid(newGridCell)
        }
        Dispatch(setFindPathStatus(false));
        Dispatch(setResetPointsButtonStatus(true))

    };

    // BLOCKED CELLS

    const blockedCell = (row: number, col: number) => {
        const newGridCell: GridType[][] = updateGridCell(row, col, { isWall: !grid[row][col].isWall, isTraversed: false });
        setGrid(newGridCell);
    }

    const removeSelectedBlockedCell = (row: number, col: number) => {
        const newGridCell: GridType[][] = updateGridCell(row, col, { isWall: false, isTraversed: false });
        setGrid(newGridCell);
    }

    // ALGORITHIM

    const runAlgorithm = useCallback(() => {
        console.log("asd")
        if (!startNode || !endNode) {
            Dispatch(setFindPathStatus(true));
            return;
        }
        const newPath = AStar(grid, startNode, endNode);
        const ids: ReturnType<typeof setTimeout>[] = [];

        newPath?.forEach((val: TileType, index: number) => {
            const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
                grid[val.row][val.col].isTraversed = true;
                setGrid((prevGrid) => {
                    const updatedGrid = [...prevGrid];
                    updatedGrid[val.row][val.col].isTraversed = true;
                    return updatedGrid;
                });
                Dispatch(setResetAlgoStatus(true))
            }, index * 200);

            ids.push(timeoutId);
        });

        setTimeoutIds(ids);
        Dispatch(setFindPathStatus(false));

    }, [grid, startNode, endNode]);


    // RESET GRID POINTS 

    const resetGrid = (resetGridUpdates: Partial<GridType>) => {
        Dispatch(setFindPathStatus(false));

        return grid.map(rowArray => {
            return rowArray.map((prevCell) => {
                return { ...prevCell, ...resetGridUpdates }
            })
        })

    }

    const resetPoints = () => {

        Dispatch(setResetPointsButtonStatus(false))
        setStartNode(null)
        setEndNode(null)
        const updatedResetGrid = resetGrid({ isTraversed: false, isStart: false, isEnd: false })
        setGrid(updatedResetGrid)
    }

    // RESET ALGORITHIM

    const resetAlgorithim = () => {
        setStartNode(null);
        setEndNode(null);
        setGrid(createCell());

        Dispatch(setResetPointsButtonStatus(false));
        Dispatch(setResetAlgoStatus(false));

        timeoutIds.forEach(clearTimeout);

        setTimeoutIds([]);
    };


    return (
        <div className="grid">
            <h4 className="top-heading">A Star Visualizer</h4>
            <div className="reset-buttons-div">

                {
                    resetAlgoStatus ? <button className="reset-path-button" onClick={resetAlgorithim}>Reset All</button> : <button className="find-path-button" onClick={runAlgorithm}>Find Path</button>
                }
                {
                    resetPointsButtonStatus ? <button className="reset-path-button" onClick={resetPoints}>Reset start and end Points</button> : null
                }

            </div>

            <div className="heading-div">
                <h4>Please select start and end point by clicking on the grid cell</h4>
                <h4>By right clicking on white cells you can set up blocked walls. By Right Clicking on blocked wall you can remove selected blocked walls</h4>
            </div>


            <Notations />

            <GridComponent grid={grid} blockedCell={blockedCell} removeSelectedBlockedCell={removeSelectedBlockedCell} changeGridCell={changeGridCell} />
            {findPathStatus && <p className="select-path-error-message">Please Select Points</p>}

        </div>
    );
}

export default PathFindingComponent;