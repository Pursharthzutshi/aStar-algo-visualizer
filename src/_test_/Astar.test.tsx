import AStar from "../components/algorithim/Astar"
import createCell from "../components/util/CreateCell"
import { gridType } from "../types/CellTypes"

type sampleGridTestValuesTypes = {
    row: number
    col: number
}



describe("Astar algo", () => {

    it("Check Greater path Length", () => {
        const sampleGridTestValues: sampleGridTestValuesTypes[] = [
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 1, col: 3 },
            { row: 0, col: 3 },
        ]
        const grid: gridType[][] = createCell(sampleGridTestValues)
        console.log(grid)
        const startNode = grid[0][0]
        const endNode = grid[9][9]
        const path = AStar(grid, startNode, endNode)

        console.log(path?.length)
        expect(path?.length).toBeGreaterThanOrEqual(1);
    })

    it("Check Smaller Path length", () => {
        const sampleGridTestValues: sampleGridTestValuesTypes[] = [
            { row: 1, col: 0 },
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 1, col: 3 },
            { row: 0, col: 3 },
        ]
        const grid: gridType[][] = createCell(sampleGridTestValues)
        //   console.log(grid)
        const startNode = grid[0][0]
        const endNode = grid[0][0]
        const path = AStar(grid, startNode, endNode)

        console.log(path?.length)
        expect(path?.length).toBeLessThanOrEqual(1);
    })
})


