import { GridType, TileType } from "../../types/CellTypes";
import findOptimizedFScore from "../util/FindOptimizedFScore";
import GetNeighborsNodes from "../util/GetNeighborsNodes";
import heuristicFunction from "../util/heuristicFunction";
import InitFunctionCost from "../util/InitFunctionCost";
import ReconstructPath from "../util/ReconstructPath";

function AStar(grid: GridType[][], startNode: TileType, endNode: TileType): TileType[] | null {

    const TraversedOptimizedPaths: TileType[] = [];
    let TraversedPaths: TileType[] = [startNode];

    const heuristicCost = heuristicFunction(grid, endNode);
    const functionCost = InitFunctionCost(grid);

    startNode.gScore = 0;
    startNode.hScore = heuristicCost[startNode.row][startNode.col];
    startNode.fScore = startNode.gScore + startNode.hScore;
    functionCost[startNode.row][startNode.col] = startNode.fScore;

    while (TraversedPaths.length > 0) {
        const currentOptimizedNode = findOptimizedFScore(TraversedPaths, functionCost);

        if (currentOptimizedNode === endNode) {
            return ReconstructPath(endNode);
        }

        TraversedPaths = TraversedPaths.filter(node => node !== currentOptimizedNode);
        TraversedOptimizedPaths.push(currentOptimizedNode);

        const neighbors = GetNeighborsNodes(grid, currentOptimizedNode);

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

    return null;
}


export default AStar

