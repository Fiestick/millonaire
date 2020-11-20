export interface Question {
  name: string,
  answerOptions: Array<AnswerOptions>
  answerTrue: string
  completed: boolean,
  score: number,
  active?: boolean,
}

export interface AnswerOptions {
  name: string,
  value: string
  correct?: boolean | null,
  disabled?: boolean,
  checked: boolean
} 

export interface User {
  questions: Array<Question>
}


export interface AnswerValueComponet {
  answerValueData: {
    score: number,
    active?: boolean,
    completed: boolean,
  }
}
export interface AnswerButtonComponent {
  answerButtonData: AnswerOptions,
  onChange: any,
}


export interface QuestionsPageComponent{
  getScore: any
}