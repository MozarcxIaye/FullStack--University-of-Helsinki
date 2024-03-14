const App = () => {
  try{    
    const course = {
    name : "Half Stack application development",
    parts: [{
      name : "Fundamentals of React",
      exercises : 10
    },{
      name : "Using props to pass data",
      exercises : 7
    },{
      name : "State of a component",
      exercises : 14
    }]
  }

  // Header Component
  const Header = (props) => {
    return <h1>{props.course}</h1> 
  }

  // Content Component
    const Content = ({parts}) => {
      return <div>
      {parts.map((part, index) => {
        // console.log(part.name)
        return <Part key={index} part = {part} />
      })}
      </div>
    }
 
  // Total Component
  const Total = ({parts}) => {
    let total = 0
    parts.forEach(part => {
      total += part.exercises
    })
    return <p>Number of exercises {total}</p>
  }

  // Part Component
  const Part = ({part}) => {
    console.log(part.name)
    return <p>{part.name} {part.exercises}</p>
  }

  return(
    <div>
      <Header course = {course.name}></Header>
      <Content parts = {course.parts}></Content>
      <Total parts = {course.parts}></Total>
    </div>
  )

} catch{
  console.error(error)
}
}



export default App
