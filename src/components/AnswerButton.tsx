import React from 'react'
import '../assets/style/answerOptionButton.css'
import {AnswerButtonComponent} from '../interfase/interfase'


export const AnswerButton:React.FC<AnswerButtonComponent> = ( prop ) => {
  //  
  const classes = ["answer-option-button"]
  const data = prop.answerButtonData

  if(data.correct){
    classes.push("correct")
  } else if(data.correct != undefined) {
    classes.push("wrong")
  }

  return (
    <label className={classes.join(' ')}>
      <input type="checkbox" disabled={data.disabled} checked={data.checked} name={data.name} onChange={() => {
          prop.onChange(data.checked, data.value, prop)
        }} />
      <div className="answer-option-button__bg">
        <svg width="422" height="72" viewBox="0 0 320 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M303 28L324 28"/>
          <path d="M-9 28L20 28"/>
          <path d="M42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5Z"/>
        </svg>
      </div>
      <div className="answer-option-button__body">
        <p className="answer-option-button__index orange">{data.value }</p>
        <p className="answer-option-button__value">{data.name}</p>
      </div>
    </label>
  )
}