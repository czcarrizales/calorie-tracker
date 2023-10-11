import { useState } from 'react'
import './Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToFoodLog, updateCurrentCalories, updateCurrentCarbs, updateCurrentFat, updateCurrentProtein } from './slices/userSlice'

const Modal = ({setShowModal}) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState(0)
    const [foodProtein, setFoodProtein] = useState(0)
    const [foodFat, setFoodFat] = useState(0)
    const [foodCarbs, setFoodCarbs] = useState(0)

    const handleCancelButton = () => {
        setShowModal(false)
    }

    const handleAddButton = () => {
        setShowModal(false)
        dispatch(updateCurrentProtein(foodProtein))
        dispatch(updateCurrentCalories(foodCalories))
        dispatch(updateCurrentCarbs(foodCarbs))
        dispatch(updateCurrentFat(foodFat))
        dispatch(addToFoodLog({
            name: foodName,
            calories: foodCalories,
            protein: foodProtein,
            fat: foodFat,
            carbs: foodCarbs
        }))
    }

  return (
    <div className='modal-container'>
        <div className="modal-content">
            <h2>Add Food</h2>
            <label htmlFor="name">
                Food Name:
                <input type="text" onChange={(e) => setFoodName(e.target.value)}  />
            </label>
            <label htmlFor="calories">
                Calories:
                <input type="number" onChange={(e) => setFoodCalories(parseInt(e.target.value))} />
            </label>
            <label htmlFor="protein">
                Protein:
                <input type="number" onChange={(e) => setFoodProtein(parseInt(e.target.value))} />
            </label>
            <label htmlFor="fats">
                Fats:
                <input type="number" onChange={(e) => setFoodFat(parseInt(e.target.value))} />
            </label>
            <label htmlFor="carbs">
                Carbs:
                <input type="number" onChange={(e) => setFoodCarbs(parseInt(e.target.value))} />
            </label>
            <button onClick={handleCancelButton}>Cancel</button>
            <button onClick={handleAddButton}>Add</button>
        </div>
    </div>
  )
}

export default Modal