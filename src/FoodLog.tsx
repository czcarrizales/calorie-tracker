import { useState } from 'react'
import './FoodLog.css'

const FoodLog = ({ name, calories, protein, fat, carbs }) => {
    const [foodLogName, setFoodLogName] = useState(name)
    const [foodLogCalories, setFoodLogCalories] = useState(calories)
    const [foodLogProtein, setFoodLogProtein] = useState(protein)
    const [foodLogFat, setFoodLogFat] = useState(fat)
    const [foodLogCarbs, setFoodLogCarbs] = useState(carbs)
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div className='food-log-container'>
            <div className='food-log-basic-details'>
                <div className='food-log-element'>
                    <p className='food-log-label'>Name</p>
                    <p className='food-log-detail'>{foodLogName}</p>
                </div>
                <div className='food-log-element'>
                    <p className='food-log-label'>Calories</p>
                    <p>{foodLogCalories}</p>
                </div>
                <button  onClick={handleShowMore} className='food-log-element food-log-show-details-button'>{showMore ? 'Less' : 'More'}</button>
            </div>

            {
                showMore
                &&
                <div className='food-log-more-details'>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Protein</p>
                        <p>{foodLogProtein}</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Fats</p>
                        <p>{foodLogFat}</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Carbs</p>
                        <p>{foodLogCarbs}</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default FoodLog