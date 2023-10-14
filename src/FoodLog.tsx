import { useState } from 'react'
import './FoodLog.css'
import { useDispatch } from 'react-redux';
import { setEditingFoodDetails, setShowModal } from './slices/appSlice';
import { setEditFoodId } from './slices/userSlice';

interface FoodLogProps {
    id: any;
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  }

const FoodLog: React.FC<FoodLogProps> = ({ name, calories, protein, fat, carbs, id }) => {
    const dispatch = useDispatch()
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    const handleEditFood = () => {
        dispatch(setEditingFoodDetails(true))
        dispatch(setShowModal(true))
        dispatch(setEditFoodId(id))
    }

    return (
        <div className='food-log-container'>
            <div className='food-log-basic-details'>
                <div className='food-log-element'>
                    <p>{id}</p>
                    <p className='food-log-label'>Name</p>
                    <p className='food-log-detail'>{name}</p>
                </div>
                <div className='food-log-element'>
                    <p className='food-log-label'>Calories</p>
                    <p>{calories}</p>
                </div>
                <button onClick={handleEditFood}>edit</button>
                <button  onClick={handleShowMore} className='food-log-element food-log-show-details-button'>{showMore ? 'Less' : 'More'}</button>
            </div>

            {
                showMore
                &&
                <div className='food-log-more-details'>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Protein</p>
                        <p>{protein}g</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Fats</p>
                        <p>{fat}g</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Carbs</p>
                        <p>{carbs}g</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default FoodLog