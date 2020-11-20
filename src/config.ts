import { User } from './interfase/interfase'

const user: User = {
  questions: [
    {
      name: 'Як буде виглдати число 5 в двоїчній системи обчислення',
      answerOptions: [
        {
          name: '0110',
          value: 'A',
          checked: false,
        },
        {
          name: '1010',
          value: 'B',
          checked: false,
        },
        {
          name: '0001',
          value: 'C',
          checked: false,
        },
        {
          name: '0111',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 500,
      answerTrue: 'A',
    },
    {
      name: 'Хто з перечислених людей є представником IT',
      answerOptions: [
        {
          name: 'Боб Марли',
          value: 'A',
          checked: false,
        },
        {
          name: 'Джордж Паттон',
          value: 'B',
          checked: false,
        },
        {
          name: 'Роберт Мартин',
          value: 'C',
          checked: false,
        },
        {
          name: 'Тарас Шевченко',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 1000,
      answerTrue: 'C',
    },
    {
      name: 'Виберіть числа Фібоначі',
      answerOptions: [
        {
          name: '1',
          value: 'A',
          checked: false,
        },
        {
          name: '10',
          value: 'B',
          checked: false,
        },
        {
          name: '4',
          value: 'C',
          checked: false,
        },
        {
          name: '3',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 2000,
      answerTrue: 'AD',
    },
    {
      name: 'Коли поччалася Друга Світова війна',
      answerOptions: [
        {
          name: '1939',
          value: 'A',
          checked: false,
        },
        {
          name: '1941',
          value: 'B',
          checked: false,
        },
        {
          name: '1945',
          value: 'C',
          checked: false,
        },
        {
          name: '1917',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 4000,
      answerTrue: 'A',
    },
    {
      name: 'Чому дорівнює число π',
      answerOptions: [
        {
          name: '5.20...',
          value: 'A',
          checked: false,
        },
        {
          name: '3.14...',
          value: 'B',
          checked: false,
        },
        {
          name: '8.11...',
          value: 'C',
          checked: false,
        },
        {
          name: '4.9...',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 8000,
      answerTrue: 'B',
    },
    {
      name: 'Хто перша людина яка полетіла в космос?',
      answerOptions: [
        {
          name: 'Остап Вишня',
          value: 'A',
          checked: false,
        },
        {
          name: 'Остап Бендер',
          value: 'B',
          checked: false,
        },
        {
          name: 'Юрій Гагарін',
          value: 'C',
          checked: false,
        },
        {
          name: 'Джоні Депп',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 16000,
      answerTrue: 'C',
    },
    {
      name: 'Орган який перекачує кров',
      answerOptions: [
        {
          name: 'Печінка',
          value: 'A',
          checked: false,
        },
        {
          name: 'Нирки',
          value: 'B',
          checked: false,
        },
        {
          name: 'Селезінка',
          value: 'C',
          checked: false,
        },
        {
          name: 'Серцце',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 64000,
      answerTrue: 'D',
    },
    {
      name: 'Чому дорівнює 2^8',
      answerOptions: [
        {
          name: '2048',
          value: 'A',
          checked: false,
        },
        {
          name: '8',
          value: 'B',
          checked: false,
        },
        {
          name: '256',
          value: 'C',
          checked: false,
        },
        {
          name: '512',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 128000,
      answerTrue: 'C',
    },
    {
      name: 'як позначається золото в таблиці Менделєєва',
      answerOptions: [
        {
          name: 'Ra',
          value: 'A',
          checked: false,
        },
        {
          name: 'Be',
          value: 'B',
          checked: false,
        },
        {
          name: 'Au',
          value: 'C',
          checked: false,
        },
        {
          name: 'N',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 250000,
      answerTrue: 'C',
    },
    {
      name: 'Чому дорівнює число π',
      answerOptions: [
        {
          name: '5.20...',
          value: 'A',
          checked: false,
        },
        {
          name: '3.14...',
          value: 'B',
          checked: false,
        },
        {
          name: '8.11...',
          value: 'C',
          checked: false,
        },
        {
          name: '4.9...',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 500000,
      answerTrue: 'B',
    },
    {
      name: 'Який книгу написав Тарас Григорьевич Шевченко',
      answerOptions: [
        {
          name: 'Кобзар',
          value: 'A',
          checked: false,
        },
        {
          name: 'Чумак',
          value: 'B',
          checked: false,
        },
        {
          name: 'Война и мир',
          value: 'C',
          checked: false,
        },
        {
          name: 'Маленький принц',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 800000,
      answerTrue: 'A',
    },
    {
      name: 'Якою наукою займався Ісаак Ньютон',
      answerOptions: [
        {
          name: 'Математика',
          value: 'A',
          checked: false,
        },
        {
          name: 'Фізика',
          value: 'B',
          checked: false,
        },
        {
          name: 'Хімія',
          value: 'C',
          checked: false,
        },
        {
          name: 'Історія',
          value: 'D',
          checked: false,
        },
      ],
      completed: false,
      score: 1000000,
      answerTrue: 'B',
    },
  ],
}

const data = JSON.stringify(user)

export { data }
