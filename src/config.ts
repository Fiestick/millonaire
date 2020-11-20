import { User } from './interfase/interfase'

const user: User = {
  questions: [
    {
      name: 'вибрати цифру 1, 2',
      answerOptions: [
        {
          name: '1',
          value: 'A',
          checked: false
        },
        {
          name: '2',
          value: 'B',
          checked: false
        },
        {
          name: '3',
          value: 'C',
          checked: false
        },
        {
          name: '4',
          value: 'D',
          checked: false
        },
      ],
      completed: false,
      score: 100,
      answerTrue: "AB"
    },
    {
      name: 'вибрати цифру 1',
      answerOptions: [
        {
          name: '1',
          value: 'A',
          checked: false
        },
        {
          name: '2',
          value: 'B',
          checked: false
        },
        {
          name: '3',
          value: 'C',
          checked: false
        },
        {
          name: '4',
          value: 'D',
          checked: false
        },
      ],
      completed: false,
      score: 200,
      answerTrue: "A"
    }
  ]
}

const data = JSON.stringify(user)


export {data}