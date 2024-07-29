import { createSlice } from "@reduxjs/toolkit"

type initialStateProps = {
    resetAlgoStatus: boolean
    findPathStatus: boolean
    resetPointsButtonStatus: boolean

}

const initialState: initialStateProps = {
    resetAlgoStatus: false,
    findPathStatus: false,
    resetPointsButtonStatus: false,
}

export const AlgorithimSlicer = createSlice({
    name: "AddEmployeesTaskSlicer",
    initialState,
    reducers: {
        setResetAlgoStatus: (state, action) => {
            state.resetAlgoStatus = action.payload;
        },

        setFindPathStatus: (state, action) => {
            state.findPathStatus = action.payload;
        },

        setResetPointsButtonStatus: (state, action) => {
            state.resetPointsButtonStatus = action.payload;
        },


    }
})

export const { setResetAlgoStatus, setFindPathStatus, setResetPointsButtonStatus } = AlgorithimSlicer.actions;

export default AlgorithimSlicer.reducer