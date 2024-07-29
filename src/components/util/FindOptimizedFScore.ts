import { TileType } from "../../types/CellTypes";

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

export default findOptimizedFScore