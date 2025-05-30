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


const Total = (props) => (
  <p>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
)

const Course = ({ course }) => {
  return (
    <>
      <Header content={course.name} />
      <Content parts={course.parts} />
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