import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const averagePoints = ((good - bad) / total).toFixed(1)
  const positivePoints = `${((good / total) * 100).toFixed(1)} %`

  if (total === 0) {
    return <p>No feedback given.</p>
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine label="Good" value={good} />
          <StatisticLine label="Neutral" value={neutral} />
          <StatisticLine label="Bad" value={bad} />
          <StatisticLine label="All" value={total} />
          <StatisticLine label="Average" value={averagePoints} />
          <StatisticLine label="Positive" value={positivePoints} />
        </tbody>
      </table>
 
    </>
  )
}

const StatisticLine = ({label, value}) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="Good"/>
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"/>
        <Button onClick={() => setBad(bad + 1)} text="Bad"/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App