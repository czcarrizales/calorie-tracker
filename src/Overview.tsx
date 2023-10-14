import FoodLog from './FoodLog'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import './Overview.css'
import { useDispatch, useSelector } from 'react-redux';
import { addFoodToFoodLog, editCurrentWeight, setShowModal } from './slices/appSlice';

const Overview = () => {

    const dispatch = useDispatch()

    const user = useSelector((state: any) => state.user)
    const app = useSelector((state: any) => state.app)

    const styles = buildStyles({
        strokeLinecap: 'round',
        pathTransitionDuration: 0.5,
        textSize: '16px',
        pathColor: '#2BBC66'
    });

    const handleAddFood = () => {
        dispatch(setShowModal(true))
        dispatch(addFoodToFoodLog(true))
    }

    const handleEditCurrentWeight = () => {
        dispatch(setShowModal(true))
        dispatch(editCurrentWeight(true))
    }

    return (
        <div className='overview-main-container'>
            <div className='app-calorie-container'>
                <CircularProgressbarWithChildren value={(user.currentCalories / user.maxCalories) * 100} strokeWidth={4} styles={styles}>
                    <div>
                        <h1>{user.currentCalories}</h1>
                        <h2>Calories</h2>
                    </div>
                </CircularProgressbarWithChildren>
            </div>

            <div className='app-overview-details-container'>
                <div className='app-overview-detail'>
                    <h3>Weight <span className='edit-button' onClick={handleEditCurrentWeight}>edit</span></h3>
                    <p>{user.currentWeight} lb</p>
                </div>
                <div className='app-overview-detail'>
                    <h3>Protein</h3>
                    <p>{user.currentProtein}g</p>
                </div>
                <div className='app-overview-detail'>
                    <h3>Fats</h3>
                    <p>{user.currentFat}g</p>
                </div>
                <div className='app-overview-detail'>
                    <h3>Carbs</h3>
                    <p>{user.currentCarbs}g</p>
                </div>
            </div>
            <div className='overview-food-log-container'>
                <div className='overview-food-log-title'>
                    <h3>Food Log</h3>
                    <button className='overview-food-log-add' onClick={handleAddFood}>+ Add New Food</button>
                </div>

                {
                    user.foodLog.map((food: any) => {
                        return (
                            <FoodLog name={food.name} calories={food.calories} protein={food.protein} fat={food.fat} carbs={food.carbs} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overview