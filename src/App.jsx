import React from 'react'
import './App.css'
import Header from '../components/Header'
import CardGrid from '../components/CardGrid'

function App() {
  /*
    App: 
    This is the main entry point of your application. 
    It should contain the CardGrid and Header components. 
    It should also keep track of the best score. 
  */
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(score);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardGrid score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
    </>
  )
}

export default App
