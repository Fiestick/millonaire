import React from 'react';
import './assets/style/App.css';
import {MainPage} from './pages/MainPage'
import {QuestionsPage} from './pages/QuestionsPage'
import {FinalePage} from './pages/FinalePage'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {

  const [score, setScore] = React.useState<number>(0)

  const getScore = (score: number) => {
    setScore(score)
  }

  const props = {
    score: getScore
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/question" exact>
          <QuestionsPage getScore={getScore} />
        </Route>
        <Route  path="/final"  exact>
          <FinalePage score={score} />
        </Route>
      </Switch>
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default App;
