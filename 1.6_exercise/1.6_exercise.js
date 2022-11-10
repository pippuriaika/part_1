import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleBadClick}>Bad</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleGoodClick}>Good</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App
