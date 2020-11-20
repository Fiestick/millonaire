import React from 'react'
import { NavLink } from 'react-router-dom'
import handImg from '../assets/img/hand.png'

export const FinalePage:React.FC<{score: number}> = ( {score} ) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="final-page">
          <div className="final-page__img">
            <img src={handImg} alt=""/>
          </div>
          <div className="final-page__content">
            <div className="final-page__text">
              <h2 className="gray">Total score:</h2>
              <h1>${score} earned</h1>
            </div>
            <NavLink to="/" className="action-button margit-top">Try again</NavLink>
          </div>
        </div>
      </div>
    </div>

  )
} 
