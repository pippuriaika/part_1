import { useState } from 'react'

const Statistics = (props) => {
  return <div>
    <p>All {props.all} </p>
    <p>Average {props.average}</p>
    <p>Positive {props.positive}%</p>
  </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] =useState(0)

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1)
  }
  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1)
  }

  const average = ((good)+(neutral)+(bad))/3
  let positive = ((good)/(all))*100 
 

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
      <Statistics all={all} average={average} positive={positive} />
    </div>
  )
}

export default App
