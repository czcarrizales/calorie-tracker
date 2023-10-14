import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showModal: false,
        editingCurrentWeight: false,
        addFoodToFoodLog: false
    },
    reducers: {
        setShowModal: (state, action) => {
            state.showModal = action.payload
        },
        editCurrentWeight: (state, action) => {
            state.editingCurrentWeight = action.payload
        },
        addFoodToFoodLog: (state, action) => {
            state.addFoodToFoodLog = action.payload
        }
    }
})

export const {editCurrentWeight, setShowModal,addFoodToFoodLog} = appSlice.actions;
export default appSlice.reducer;