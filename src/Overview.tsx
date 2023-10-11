import FoodLog from './FoodLog'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import './Overview.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Overview = () => {

    const user = useSelector((state) => state.user)

    const styles = buildStyles({
        strokeLinecap: 'round',
        pathTransitionDuration: 0.5,
        textSize: '16px',
        pathColor: '#2BBC66'
    });

    return (
        <div className='overview-main-container'>
            <CircularProgressbarWithChildren className='app-calorie-container' value={(user.currentCalories / user.maxCalories) * 100} strokeWidth={4} styles={styles}>
                    <h1>Calories</h1>
                    <h2>{user.currentCalories}</h2>

            </CircularProgressbarWithChildren>
            <div className='app-overview-details-container'>
                <div className='app-overview-detail'>
                    <h3>Weight</h3>
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
                <h3>Food Log</h3>
                {
                    user.foodLog.map((food) => {
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