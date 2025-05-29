const Header = (props) => (
  <h1>{props.content}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Content = (props) => (
  <>
    <Part part={props.p1} exercise={props.e1} />
    <Part part={props.p2} exercise={props.e2} />
    <Part part={props.p3} exercise={props.e3} />
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header content={course} />
      <Content
        p1={parts[0].name} e1={parts[0].exercises}
        p2={parts[1].name} e2={parts[1].exercises}
        p3={parts[2].name} e3={parts[2].exercises}
      />
      <Total 
        e1={parts[0].exercises}
        e2={parts[1].exercises}
        e3={parts[2].exercises} 
      />
    </div>
  )
}

export default App