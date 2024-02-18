import React from 'react'
import './App.css'
import Header from '../components/Header'
import CardGrid from '../components/CardGrid'

function App() {
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