import React , {useEffect} from 'react'
import {AnswerButton} from '../components/AnswerButton'
import {AnswerValue} from '../components/AnswerValue'
import { data } from "../config"
import { User, Question, AnswerOptions, QuestionsPageComponent } from '../interfase/interfase'
import { useHistory } from 'react-router-dom'
import '../assets/style/questionsPage.css'

const questionActiveReset:Question = {
  answerOptions: [
    {name: '',value: '', checked: false},
    {name: '',value: '', checked: false}
  ],
  completed: false,
  answerTrue: '',
  name: '',
  score: 0,
}

const answerOptionsResetList: Array<AnswerOptions> = [
  {name: '',value: '', checked: false},
  {name: '',value: '', checked: false}
]

let checkString = ''

export const QuestionsPage:React.FC<QuestionsPageComponent> = ( prop ) => {
  
  const user:User = JSON.parse(data)
  const [question, setQuestion ] = React.useState<Question[]>(user.questions)
  const [questionActive, setQuestionActive] = React.useState<Question>(questionActiveReset)
  const [answerOptions, setAnswerOptions] = React.useState<Array<AnswerOptions>>(answerOptionsResetList)
  const history = useHistory()
  useEffect(() => {
    for(let activeQuestion of question){
      if(!activeQuestion.completed){
        let list = activeQuestion.answerOptions
        setQuestionActive(activeQuestion)
        setAnswerOptions(list)
        activeQuestion.active = true
        break
      } 
    }
  },)
  
  const selectValue = (checked: boolean, value: string) => {
    if(!checked){
      setAnswerOptions(answerOptions.map(item => {
        if(item.value == value){
          item.checked = true
        }
        return item
      }))
      switch (questionActive.answerTrue.length > 1){
        case false: {
          chackCorrect(value)
        } break
        case true: {
          chackCorrectList(value)
        } break
      }
    } else {
      setAnswerOptions(answerOptions.map(item => {
        if(item.value == value){
          item.checked = false
        }
        return item
      }))
    }
  }

  const chackCorrectList = (value: string) => {
    checkString = checkString + value
    checkString = checkString.split('').sort().join('')
    const corectAnswerTrue = questionActive.answerTrue.split('').sort().join('')
    if(checkString.length <= questionActive.answerTrue.length && checkString === corectAnswerTrue){
      setAnswerOptions(answerOptionsCorrectList())
      setTimeout(() => {
        setAnswerOptions(answerOptionsReset())
        correctAnswer()
      }, 2000)
    } else {
      switch (checkString.length >= questionActive.answerTrue.length){
        case true: 
          setAnswerOptions(answerOptionsUnCorrectList())
          setTimeout(() => {
            uncorrectAnswer()
          }, 2000)
          break
      }
    }
  }

  const chackCorrect = (param: string) => {
    if(param === questionActive.answerTrue){
      setAnswerOptions(answerOptionsCorrect(param))
      setTimeout(() => {
        correctAnswer()
      }, 2000)
      
    } else {
      setAnswerOptions(answerOptionsUnCorrect(param))
      setTimeout(() => {
        uncorrectAnswer()
      }, 2000)
    }
    
  }

  const correctAnswer = () => {
    prop.getScore(questionActive.score) 
    if(questionActive === question[question.length - 1] ){
      checkString = ''
      history.push('/final')
    } else {
      setQuestion(question.map(item => {
        if(item === questionActive){
          item.completed = true
          return item
        } else{
          return item
        }
      }))
    }
  }

  const uncorrectAnswer = () => {
    setQuestion(question.map(item => {
      if(item === questionActive){
        item.completed = false
        return item
      } else{
        return item
      }
    }))
    checkString = ''
    setAnswerOptions(answerOptionsReset())
    history.push('/final')
  }

  const answerOptionsCorrect = (param: string):Array<AnswerOptions> => {
    let list = answerOptions.map(item => {
      item.checked = false
      item.disabled = true
      if(item.value === param){
        item.correct = true
        return item
      } else{
        item.disabled = true
        return item
      }
    }) 
    return list
  }

  const answerOptionsUnCorrect = (param: string):Array<AnswerOptions> => {
    let list = answerOptions.map(item => {
      item.checked = false
      item.disabled = true
      if(item.value === param){
        item.correct = false
        return item
      } else{
        return item
      }
    })
    return list
  }

  const answerOptionsCorrectList = ():Array<AnswerOptions> => {
    let listReturn = answerOptions.map(item => {
      let correctList = questionActive.answerTrue.split('')
      correctList.forEach((correctArg) => {
        item.disabled = true
        if(item.value == correctArg){
          item.correct = true
          return item
        } else {
          item.disabled = true
          return item
        }
      })
      return item
    })
    return listReturn
  }

  const answerOptionsUnCorrectList = ():Array<AnswerOptions> => {
    let listReturn = answerOptions.map(item => {
      item.disabled = true
      if(item.checked){
        item.correct = false
        return item
      }
      return item
    })
    return listReturn
  }
  
  const answerOptionsReset = ():Array<AnswerOptions> => {
    let list =  answerOptions.map(item => {
      item.checked = false
      item.correct = null
      item.disabled = false
      return item
    })
    return list
  }

  if(questionActive){
    return (
      <div className="container-fluid gray">
        <div className="questions-page">
          <div className="questions-page__body">
            <h2>{questionActive?.name}</h2>
            <form className="answer-option">
              {answerOptions.map( (param, i) => {
                return (
                  <AnswerButton
                    answerButtonData = {
                      {
                        name: param.name,
                        value: param.value,
                        correct: param.correct,
                        disabled: param.disabled,
                        checked: param.checked
                      }
                    }
                    onChange={selectValue}
                    key={i}
                  />
                )
              })}
            </form>
          </div>
          <div className="questions-page__score">
            {question.map( (param, i) => {
                return (
                  <AnswerValue 
                    answerValueData = { 
                      {
                      score: param.score,
                      active: param.active,
                      completed: param.completed
                      }
                    }
                    key = {i}
                  />
                )
              })}
          </div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
} 