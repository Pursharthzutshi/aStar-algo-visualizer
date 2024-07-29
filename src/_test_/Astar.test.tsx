import { Provider } from "react-redux"
import AStar from "../components/algorithim/Astar"
import createCell from "../components/util/CreateCell"
import { GridType } from "../types/CellTypes"
import { act } from "react"
import { render } from "@testing-library/react"
import { store } from "../ReduxStore/store"
import PathFindingComponent from "../components/PathfindingComponent/PathFindingComponent"

describe("Astar Algorithim Test", () => {

    it("Check Greater path Length", () => {
        const grid: GridType[][] = createCell()
        const startNode = grid[0][0]
        const endNode = grid[7][9]
        const path = AStar(grid, startNode, endNode)

        expect(path?.length).toBeGreaterThanOrEqual(1);
    })

    it("Check Smaller Path length", () => {
        const grid: GridType[][] = createCell()
        const startNode = grid[0][0]
        const endNode = grid[0][0]
        const path = AStar(grid, startNode, endNode)

        expect(path?.length).toBeLessThanOrEqual(1);
    })

    it("snapshot", async () => {

        const { container } = await act(async () => render(
            <Provider store={store}>
                <PathFindingComponent />
            </Provider>
        ))
        expect(container.querySelector("h4")).toMatchSnapshot();

    })
})


