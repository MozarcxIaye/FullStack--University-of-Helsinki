const App = () => {

  const course = "Half Stack application development"
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  // Header Component
  const Header = (props) => {
    return <h1>{props.course}</h1> 
  }

  // Content Component
  const Content = ({part, exercise}) => {
    return <Part part = {part} exercise = {exercise}></Part>

  }

  // Total Component
  const Total = ({exercises1, exercises2, exercises3}) => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  }

  // Part Component
  const Part = ({part, exercise}) => {
    return <p>{part} {exercise}</p>
  }

  return(
    <div>
      <Header course = {course}></Header>
      <Content exercise = {exercises1} part={part1}></Content>
      <Content exercise = {exercises2} part={part2}></Content>
      <Content exercise = {exercises2} part={part3}></Content>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}></Total>
    </div>
  )

}


export default App
