import { useState } from 'react'
import './FoodLog.css'

interface FoodLogProps {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  }

const FoodLog: React.FC<FoodLogProps> = ({ name, calories, protein, fat, carbs }) => {
    const [foodLogName] = useState(name)
    const [foodLogCalories] = useState(calories)
    const [foodLogProtein] = useState(protein)
    const [foodLogFat] = useState(fat)
    const [foodLogCarbs] = useState(carbs)
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
                        <p>{foodLogProtein}g</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Fats</p>
                        <p>{foodLogFat}g</p>
                    </div>
                    <div className='food-log-element'>
                        <p className='food-log-label'>Carbs</p>
                        <p>{foodLogCarbs}g</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default FoodLog