export type commonFunctionTypes = {
    blockedCell: (row: number, col: number) => void;
    changeGridCell: (row: number, col: number) => void;
    removeSelectedBlockedCell: (row: number, col: number) => void;

}

export type cellTypes = commonFunctionTypes & {
    grid: GridType[][]
}

export type CellComponentProps = commonFunctionTypes & {
    cell: cellVal
    isTraversed: boolean
    isStart: boolean
    isEnd: boolean
    isWall: boolean
    isPath: boolean
}

export type cellVal = {
    row: number
    col: number
    isTraversed: boolean
    isStart: boolean
    isEnd: boolean
    isWall: boolean
    isPath: boolean
}



export type NodeType = {
    row: number;
    col: number;
}

export type CommonType = {
    row: number;
    col: number;
    isWall: boolean;
    gScore: number;
    hScore: number;
    fScore: number;
    parent: TileType | null;
}

export type GridType = CommonType & {
    isSelect: boolean
    isStart: boolean
    isEnd: boolean
    isTraversed: boolean
    isPath: boolean
    isWall: boolean
}

export type TileType = CommonType & {
    row: number;
    col: number;
}


