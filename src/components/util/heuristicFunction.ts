import { TileType } from "../../types/CellTypes";

function heuristicFunction(grid: TileType[][], endNode: TileType): number[][] {
    return grid.map(row =>
        row.map(tile => Math.abs(tile.row - endNode.row) + Math.abs(tile.col - endNode.col))
    );
}
export default heuristicFunction;