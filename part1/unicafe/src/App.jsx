import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const averagePoints = (good - bad) / total
  const positivePoints = (good / total) * 100

  if (total === 0) {
    return <p>No feedback given.</p>
  }

  return (
    <>
      <h1>Statistics</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {good + neutral + bad}</div>
      <div>Average: {averagePoints}</div>
      <div>Positive: {positivePoints}%</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App