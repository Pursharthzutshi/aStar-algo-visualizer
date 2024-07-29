import { TileType } from "../../types/CellTypes";

function GetNeighborsNodes(grid: TileType[][], currentNode: TileType): TileType[] {
    const { row, col } = currentNode;
    const neighbors = [];

    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    return neighbors;
}
export default GetNeighborsNodes