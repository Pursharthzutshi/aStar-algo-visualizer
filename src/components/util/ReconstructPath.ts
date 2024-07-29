import { TileType } from "../../types/CellTypes";

function ReconstructPath(endNode: TileType): TileType[] {
    const path = [];
    let current: TileType | null = endNode;
    while (current !== null) {
        path.push(current);
        current = current.parent;
    }
    return path.reverse();
}

export default ReconstructPath