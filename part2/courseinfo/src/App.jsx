const Header = (props) => (
  <h1>{props.content}</h1>
)

const Part = ({ part }) => (
  <div>{part.name} {part.exercises}</div>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => <Part key={part.name} part={part}/>)}
  </>
)


const Total = ({ parts }) => {
  const sum = parts.reduce((total, current) => {
    return total += current.exercises 
  }, 0)

  console.log("Total: ", sum);

  return (
    <p>
      <b>Total: {sum}</b>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header content={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }, 
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App