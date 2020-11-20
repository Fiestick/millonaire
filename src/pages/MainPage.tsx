import React from 'react'
import handImg from '../assets/img/hand.png'
import { NavLink } from 'react-router-dom'

export const MainPage:React.FC = () => {

  
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="main-page">
          <div className="main-page__img">
            <img src={handImg} alt=""/>
          </div>
          <div className="main-page__content">
            <h1>Who wants to be a millionaire?</h1>
            <NavLink to="/question" className="action-button margit-top">Start</NavLink>
          </div>
        </div>
      </div>
      <div className="orange-triangle"></div>
    </div>
  )
} 

