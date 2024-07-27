import { TileType } from "../../types/CellTypes";

function AStar(grid: TileType[][], startNode: TileType, endNode: TileType): TileType[] | null {
    const TraversedOptimizedPaths: TileType[] = [];
    console.log(startNode)
    console.log(endNode)

    let TraversedPaths: TileType[] = [startNode];

    const heuristicCost = heuristicFunction(grid, endNode);
    const functionCost = initFunctionCost(grid);

    startNode.gScore = 0;
    startNode.hScore = heuristicCost[startNode.row][startNode.col];
    startNode.fScore = startNode.gScore + startNode.hScore;
    functionCost[startNode.row][startNode.col] = startNode.fScore;

    while (TraversedPaths.length > 0) {
        const currentOptimizedNode = findOptimizedFScore(TraversedPaths, functionCost);

        if (currentOptimizedNode === endNode) {
            return reconstructPath(endNode);
        }

        TraversedPaths = TraversedPaths.filter(node => node !== currentOptimizedNode);
        TraversedOptimizedPaths.push(currentOptimizedNode);

        const neighbors = getNeighborsNodes(grid, currentOptimizedNode);

        for (const neighbor of neighbors) {
            if (TraversedOptimizedPaths.includes(neighbor) || neighbor.isWall) {
                continue;
            }

            const tentativeGScore = currentOptimizedNode.gScore + 1;

            if (!TraversedPaths.includes(neighbor)) {
                TraversedPaths.push(neighbor);
            } else if (tentativeGScore >= neighbor.gScore) {
                continue;
            }

            neighbor.parent = currentOptimizedNode;
            neighbor.gScore = tentativeGScore;
            neighbor.hScore = heuristicCost[neighbor.row][neighbor.col];
            neighbor.fScore = neighbor.gScore + neighbor.hScore;

            functionCost[neighbor.row][neighbor.col] = neighbor.fScore;
        }
    }

    return null; // No path found
}

function initFunctionCost(grid: TileType[][]): number[][] {
    return Array.from({ length: grid.length }, () =>
        Array.from({ length: grid[0].length }, () => Infinity)
    );
}

function heuristicFunction(grid: TileType[][], endNode: TileType): number[][] {
    return grid.map(row =>
        row.map(tile => Math.abs(tile.row - endNode.row) + Math.abs(tile.col - endNode.col))
    );
}

function findOptimizedFScore(TraversedPaths: TileType[], functionCost: number[][]): TileType {
    let lowestIndex = 0;
    for (let i = 1; i < TraversedPaths.length; i++) {
        if (functionCost[TraversedPaths[i].row][TraversedPaths[i].col] <
            functionCost[TraversedPaths[lowestIndex].row][TraversedPaths[lowestIndex].col]) {
            lowestIndex = i;
        }
    }
    return TraversedPaths[lowestIndex];
}

function getNeighborsNodes(grid: TileType[][], currentNode: TileType): TileType[] {
    const { row, col } = currentNode;
    const neighbors = [];

    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    return neighbors;
}

function reconstructPath(endNode: TileType): TileType[] {
    const path = [];
    let current: TileType | null = endNode;
    while (current !== null) {
        path.push(current);
        current = current.parent;
    }
    return path.reverse();
}

export default AStar

// const grid = Array.from({ length: 10 }, (_, rowIndex) =>
//     Array.from({ length: 10 }, (_, colIndex) => ({
//         row: rowIndex,
//         col: colIndex,
//         isWall: false,
//         gScore: Infinity,
//         hScore: Infinity,
//         fScore: Infinity,
//         parent: null
//     }))
// );

// const startTile = grid[0][0];
// const endTile = grid[4][4];
// const result = AStar(grid, startTile, endTile);
// console.log(result);

