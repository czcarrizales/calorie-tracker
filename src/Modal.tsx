import { useEffect, useState } from 'react'
import './Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToFoodLog, editFoodDetails, updateCurrentCalories, updateCurrentCarbs, updateCurrentFat, updateCurrentProtein, updateCurrentWeight } from './slices/userSlice'
import { addFoodToFoodLog, editCurrentWeight, setShowModal } from './slices/appSlice'
import {v4 as uuidv4} from 'uuid'

const Modal = () => {

    const dispatch = useDispatch()
    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState(0)
    const [foodProtein, setFoodProtein] = useState(0)
    const [foodFat, setFoodFat] = useState(0)
    const [foodCarbs, setFoodCarbs] = useState(0)
    const [weight, setWeight] = useState('')
    const [foodNameEdit, setFoodNameEdit] = useState()
    const app = useSelector((state: any) => state.app)
    const user = useSelector((state: any) => state.user)

    const handleCancelButton = () => {
        dispatch(setShowModal(false))
        dispatch(addFoodToFoodLog(false))
        dispatch(editCurrentWeight(false))
    }

    const handleAddButton = (e: any) => {
        e.preventDefault()
        dispatch(setShowModal(false))
        dispatch(updateCurrentProtein(foodProtein))
        dispatch(updateCurrentCalories(foodCalories))
        dispatch(updateCurrentCarbs(foodCarbs))
        dispatch(updateCurrentFat(foodFat))
        dispatch(addToFoodLog({
            id: uuidv4(),
            name: foodName,
            calories: foodCalories,
            protein: foodProtein,
            fat: foodFat,
            carbs: foodCarbs
        }))
        dispatch(addFoodToFoodLog(false))
    }

    const handleEditWeight = (e: any) => {
        e.preventDefault()
        dispatch(updateCurrentWeight(parseInt(weight)))
        dispatch(setShowModal(false))
        dispatch(editCurrentWeight(false))
    }

    const handleUpdateFood = (e: any) => {
        e.preventDefault()
        const updatedFoodDetails = {
            name: foodName
        }
        dispatch(editFoodDetails(updatedFoodDetails))
        dispatch(setShowModal(false))
        console.log(user.foodLog)
    }

    useEffect(() => {
      if (app.editingFoodDetails) {
        const foodDetails = user.foodLog.find(food => food.id === user.editFoodId)
        setFoodName(foodDetails.name)
        console.log(foodDetails.name)
        console.log(user.editFoodId)
        console.log('we are editing!')
      }
    }, [app.editingFoodDetails])
    

    return (
        <div className='modal-container'>
            <div className="modal-content">
                {
                    app.editingCurrentWeight
                    &&
                    <>
                    <h2>Edit Current Weight</h2>
                    <p>Previous Weight: {user.currentWeight} lb</p>
                    <form onSubmit={handleEditWeight}>
                        <label htmlFor="">Current Weight</label>
                        <input type="number" onChange={(e) => setWeight(e.target.value)} required/>
                        <button className='add-food-button' type='submit'>Update Weight</button>
                            <button className='cancel-food-button' onClick={handleCancelButton}>Cancel</button>
                    </form>
                    </>
                }
                {
                    app.addFoodToFoodLog
                    &&
                    <>
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
                                    <input className='nutrition-info-input' type="number" placeholder='130 cal' onChange={(e) => setFoodCalories(parseInt(e.target.value))} required />
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
                            <button className='add-food-button' type='submit'>Add Food</button>
                            <button className='cancel-food-button' onClick={handleCancelButton}>Cancel</button>
                        </form>
                    </>
                }
                {
                    app.editingFoodDetails
                    &&
                    <>
                    <h2>Edit Food Details</h2>
                    <form onSubmit={handleUpdateFood}>
                    <div className="nutrition-info-details">
                                    <label>
                                        Name
                                    </label>
                                    <input className='nutrition-info-input' type="text" placeholder='12g' value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                                </div>
                    <button className='add-food-button' type='submit'>Update Food</button>
                            <button className='cancel-food-button' onClick={handleCancelButton}>Cancel</button>
                    </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Modal