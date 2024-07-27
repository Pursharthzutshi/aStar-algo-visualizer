export interface TileType {
    row: number;
    col: number;
    isWall: boolean;
    gScore: number;
    hScore: number;
    fScore: number;
    parent: TileType | null;
}



// export interface cellType  {
//     isWall: boolean
//     rows:number
//     row:number
//     col:number
//     cols:number
//     colIndex:number
//     cell:number
// } 

export type gridType = {
    row: number
    col: number
    isStart: boolean
    isEnd: boolean
    isTraversed:boolean
    isWall: boolean
    isPath: boolean
    gScore: number
    hScore: number
    fScore: number
    parent: null
    
}

export type test = {
    row: number;
    col: number;
    isWall: boolean;
    gScore: number;
    hScore: number;
    fScore: number;
    parent: TileType | null;
}