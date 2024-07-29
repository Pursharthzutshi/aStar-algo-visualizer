export type commonFunctionTypes = {
    blockedCell: (row: number, col: number) => void;
    changeGridCell: (row: number, col: number) => void;
    removeSelectedBlockedCell: (row: number, col: number) => void;
}

export type cellTypes = commonFunctionTypes & {
    grid: GridType[][]
}

export type TileType = CommonType & {
    row: number;
    col: number;
}


export type CommonType =  {
    isVisitedOnce: boolean
    row: number;
    col: number;
    isWall: boolean;
    gScore: number;
    hScore: number;
    fScore: number;
    parent: TileType | null;
}


export type cellValType = TileType & {
    isTraversed: boolean
    isStart: boolean
    isEnd: boolean
    isWall: boolean
    isPath: boolean
}

export type CellComponentProps = commonFunctionTypes & {
    cell: cellValType
    isTraversed: boolean
    isStart: boolean
    isEnd: boolean
    isWall: boolean
    isPath: boolean
    isVisitedOnce: boolean;
}




export type NodeType = {
    row: number;
    col: number;
}

export type GridType = CommonType & {
    isStart: boolean
    isEnd: boolean
    isTraversed: boolean
    isPath: boolean
}

