import { useState } from 'react'

const State = () => {
  let [studentName, setStudentName] = useState("Pavan")
  let [score, setScore] = useState(0)
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [skills, setSkills] = useState(["HTML"])
  let [profile, setProfile] = useState({ age: 20, city: "Hyderabad" })
  let [todos, setTodos] = useState([{ id: 1, task: "Learn React" }])

  let addTodo = () => {
    let newTodo = {
      id: todos.length + 1,
      task: `New Task - ${todos.length + 1}`
    }
    setTodos([...todos, newTodo])
  }

  let removeTodo = () => {
    setTodos(todos.slice(0, -1))
  }
  return (
    <div>
      <h1>StudentName : {studentName}</h1>
      <button onClick={() => setStudentName(studentName == "Pavan" ? "Monty" : "Pavan")}>Change Name</button>
      <hr />
      <h1>Score : {score}</h1>
      <button onClick={() => setScore(score + 5)}>Increment Score</button>
      <button onClick={() => setScore(score - 5)}>Decrement Score</button>
      <hr />
      <h1>{isLoggedIn ? "Logged In" : "Logged Out"}</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Change Logged In Status</button>
      <hr />
      <h1>Skills</h1>
      <ol>
        {skills.map((ele, ind) => {
          return <li key={ind}>{ele}</li>
        })}
      </ol>
      <button onClick={() => setSkills([...skills, "CSS"])}>Add CSS</button>
      <button onClick={() => setSkills([...skills, "JS"])}>Add JS</button>
      <button onClick={() => setSkills([])}>Clear Skills</button>
      <hr />
      <h1>Age : {profile.age}</h1>
      <h1>City : {profile.city}</h1>
      <button onClick={() => setProfile({ ...profile, age: profile.age + 1 })}>Change Age</button>
      <button onClick={() => setProfile({ ...profile, city: profile.city == "Hyderabad" ? "Banglore" : "Hyderabad" })}>Change City</button>
      <hr />
      <h1>Todos</h1>
      {todos.map((ele) => {
        return <p>{ele.id}.{ele.task}</p>
      })}
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={removeTodo}>Remove Todo</button>
    </div>
  )
}

export default State