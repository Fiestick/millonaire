import React from 'react'
import '../assets/style/answerValueButton.css'
import { AnswerValueComponet } from '../interfase/interfase'


export const AnswerValue:React.FC<AnswerValueComponet> = ( param ) => {
  const classes = ['answer-value-button']
  if(param.answerValueData.active){
    classes.push('active')
  }
  if(param.answerValueData.completed){
    classes.push('done')
  }
  return (
    <div className={classes.join(' ')}>
      <div className="answer-value-button__bg">
        <svg width="376" height="40" viewBox="0 0 376 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90.2872 0.5H285.713C289.126 0.5 292.362 2.01596 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6375 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5Z"/>
        </svg>
      </div>
      <p className="answer-value-button__value">
        {param.answerValueData.score}$
      </p>
    </div>
  )
}