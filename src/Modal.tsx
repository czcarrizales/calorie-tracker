import { useState } from 'react'
import './Modal.css'
import { useDispatch } from 'react-redux'
import { addToFoodLog, updateCurrentCalories, updateCurrentCarbs, updateCurrentFat, updateCurrentProtein } from './slices/userSlice'

interface ModalProps {
    setShowModal: any;
}

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {

    const dispatch = useDispatch()
    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState(0)
    const [foodProtein, setFoodProtein] = useState(0)
    const [foodFat, setFoodFat] = useState(0)
    const [foodCarbs, setFoodCarbs] = useState(0)

    const handleCancelButton = () => {
        setShowModal(false)
    }

    const handleAddButton = (e: any) => {
        e.preventDefault()
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
                <form onSubmit={handleAddButton}>
                    <div className="nutrition-info-details">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input className='nutrition-info-input' type="text" placeholder='Milk' onChange={(e) => setFoodName(e.target.value)} required />
                    </div>
                    <div className='nutrition-info-container'>
                        <div className='nutrition-info-details'>
                            <label htmlFor="calories">
                                Calories
                            </label>
                            <input className='nutrition-info-input' type="number" placeholder='130' onChange={(e) => setFoodCalories(parseInt(e.target.value))} required />
                        </div>
                        <div className="nutrition-info-details">
                            <label htmlFor="protein">
                                Protein <span className='optional-tag'>(optional)</span>
                            </label>
                            <input className='nutrition-info-input' type="number" placeholder='8g' onChange={(e) => setFoodProtein(parseInt(e.target.value))} />
                        </div>
                        <div className="nutrition-info-details">
                            <label htmlFor="fats">
                                Fats <span className='optional-tag'>(optional)</span>
                            </label>
                            <input className='nutrition-info-input' type="number" placeholder='5g' onChange={(e) => setFoodFat(parseInt(e.target.value))} />
                        </div>
                        <div className="nutrition-info-details">
                            <label htmlFor="carbs">
                                Carbs <span className='optional-tag'>(optional)</span>
                            </label>
                            <input className='nutrition-info-input' type="number" placeholder='12g' onChange={(e) => setFoodCarbs(parseInt(e.target.value))} />
                        </div>
                    </div>
                    <button className='add-food-button' type='submit'>Add</button>
                    <button className='cancel-food-button' onClick={handleCancelButton}>Cancel</button>
                </form>


            </div>
        </div>
    )
}

export default Modal