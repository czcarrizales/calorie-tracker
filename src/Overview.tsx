import React from 'react'
import './Overview.css'

const Overview = () => {
  return (
    <div className='overview-main-container'>
    <div className='app-calorie-container'>
        <h1>Calories</h1>
        <h2>1000</h2>
      </div>
      <div className='app-overview-details-container'>
        <div className='app-overview-detail'>
          <h3>Fats</h3>
          <p>Amount</p>
        </div>
        <div className='app-overview-detail'>
          <h3>Fats</h3>
          <p>Amount</p>
        </div>
        <div className='app-overview-detail'>
          <h3>Fats</h3>
          <p>Amount</p>
        </div>
        <div className='app-overview-detail'>
          <h3>Fats</h3>
          <p>Amount</p>
        </div>
      </div>
      <div>
        <div className='app-log-container'>
          <p className='app-log-picture'>Picture</p>
          <p>Name</p>
          <p>Calories</p>
          <p>Date</p>
        </div>
      </div>
      </div>
  )
}

export default Overview