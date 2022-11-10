import { useState } from 'react'

const StatisticLine = (props) => {
 return <tr><td>{props.text}</td><td>{props.value}</td></tr>
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div><h3>No Feedback Given</h3></div>
    )
  }

  return <table><tbody>
    <StatisticLine text="Good" value={props.good} />
    <StatisticLine text="Neutral" value={props.neutral} />
    <StatisticLine text="Bad" value={props.bad} />
    <StatisticLine text="All" value={props.all} />
    <StatisticLine text="Average" value={props.average} />
    <StatisticLine text="Positive" value={props.positive} />
  </tbody></table>
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
  let positive = ((good)/(all))*100 + "%" 
 

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleBadClick}>Bad</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleGoodClick}>Good</button>
      <h1>Statistics</h1>
      <Statistics all={all} average={average} positive={positive} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
