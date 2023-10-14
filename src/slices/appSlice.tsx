import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showModal: false,
        editingCurrentWeight: false,
        addFoodToFoodLog: false,
        editingFoodDetails: false
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
        },
        setEditingFoodDetails: (state, action) => {
            state.editingFoodDetails = action.payload
        }
    }
})

export const {editCurrentWeight, setShowModal,addFoodToFoodLog, setEditingFoodDetails} = appSlice.actions;
export default appSlice.reducer;