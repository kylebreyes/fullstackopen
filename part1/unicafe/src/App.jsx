import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAverage = () => {
    const points = good - bad
    const total = good + neutral + bad
    return points / total
  }

  const getPositive = () => {
    const total = good + neutral + bad
    return (good / total) * 100
  }

  return (
    <div>
      <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h1>Statistics</h1>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>All: {good + neutral + bad}</div>
        <div>Average: {getAverage()}</div>
        <div>Positive: {getPositive()}%</div>
    </div>
  )
}

export default App