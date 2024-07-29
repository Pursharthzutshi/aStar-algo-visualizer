import { TileType } from "../../types/CellTypes";

function InitFunctionCost(grid: TileType[][]): number[][] {
    return Array.from({ length: grid.length }, () =>
        Array.from({ length: grid[0].length }, () => Infinity)
    );
}

export default InitFunctionCost