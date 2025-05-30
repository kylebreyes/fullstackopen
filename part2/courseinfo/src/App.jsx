const Header = (props) => (
  <h1>{props.content}</h1>
)

const Part = ({ part }) => (
  <div>{part.name} {part.exercises}</div>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </>
)


const Total = ({ parts }) => {
  const sum = parts.reduce((total, current) => {
    return total += current.exercises 
  }, 0)

  return (
    <p>
      <b>Total: {sum}</b>
    </p>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => 
        <div key={course.id}>
          <Header content={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </>
  )
}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App