import { useContext, useState } from 'react'
import { ThemeContext } from './Context'

const StudentCard = ({name,branch,score,children}) => {
  let [showscore,setShowScore] = useState(false)
  let theme = useContext(ThemeContext)
  let handleScore=()=>{
    setShowScore(!showscore)
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>Branch: {branch}</p>
      <p>Status: {score>=80 ? "Passed" : "Failed"}</p>
      <button onClick={handleScore}>{showscore?"Hide Score":"Show Score"}</button>
       {showscore && <p>Score:{score}</p>}
      {children}
      <p>Theme: {theme}</p>
      <hr />
    </div>
  )
}

export default StudentCard