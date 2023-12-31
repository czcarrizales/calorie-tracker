import { createSlice } from "@reduxjs/toolkit";

const initialFoodLog: {
    id: any;
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
}[] = [
   
]

const initialCalories = initialFoodLog.reduce((totalCalories, food) => totalCalories + food.calories, 0)
const initalProtein = initialFoodLog.reduce((totalProtein, food) => totalProtein + food.protein, 0)
const initalFat = initialFoodLog.reduce((totalFat, food) => totalFat + food.fat, 0)
const initalCarbs = initialFoodLog.reduce((totalCarbs, food) => totalCarbs + food.carbs, 0)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentCalories: initialCalories,
        maxCalories: 1800,
        currentWeight: 190,
        currentProtein: initalProtein,
        currentFat: initalFat,
        currentCarbs: initalCarbs,
        foodLog: initialFoodLog,
        editFoodId: null
    },
    reducers: {
        updateCurrentCalories: (state, action) => {
            state.currentCalories += action.payload
        },
        updateCurrentFat: (state, action) => {
            state.currentFat += action.payload
        },
        updateCurrentCarbs: (state, action) => {
            state.currentCarbs += action.payload
        },
        updateCurrentProtein: (state, action) => {
            state.currentProtein += action.payload
        },
        updateCurrentWeight: (state, action) => {
            state.currentWeight = action.payload
        },
        addToFoodLog: (state, action) => {
            state.foodLog.push(action.payload)
        },
        setEditFoodId: (state, action) => {
            state.editFoodId = action.payload
        },
        editFoodDetails: (state, action) => {
            const updatedFoodLog = state.foodLog.map((food) => {
                if (food.id === state.editFoodId) {
                    return {...food, ...action.payload}
                }
                return food
            })
            state.foodLog = updatedFoodLog
        }
    }
})

export const { updateCurrentCalories, updateCurrentProtein, updateCurrentCarbs, updateCurrentFat, updateCurrentWeight, addToFoodLog, setEditFoodId, editFoodDetails } = userSlice.actions;
export default userSlice.reducer;