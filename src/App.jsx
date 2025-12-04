//!29/10/2025
//!Components
// import Greet from "./Components/Greet"
// import Welcome from "./Components/Welcome"

// let App = ()=>{
//   return <div>
//     <Welcome/>
//     <Greet/>
//   </div>
// }
// export default App

//!30/10/2025
//!JSX
// import Title from './JSX/Title'
// import Rules from './JSX/Rules'

// const App = () => {
//   return <>
//     <Title />
//     <Rules />
//   </>
// }

// export default App

//!31/10/2025
//!Expression
// import Navbar from './Expression/Navbar'
// import Header from './Expression/Header'
// import Main from './Expression/Main'

// const App = () => {
//   return <>
//     <Navbar/>
//     <Header/>
//     <Main/>
//   </>
// }

// export default App

//!01/11/2025
//!Lists
// import UserList from './Lists/UserList'
// import ProductList from './Lists/ProductList'

// const App = () => {
//   return (
//     <>
//       <UserList/>
//       <ProductList/>
//     </>
//   )
// }

// export default App

//!03/11/2025
//!Props
// import Restaurant from './Props/Restaurant'
// import Dish from './Props/Dish'

// const App = () => {
//   return (
//     <div>
//       <Restaurant name="Pista House" location="Dilsukhnagar" pincode={500065}/>
//       <Dish name="Chicken Biryani" price={350}/>
//       <Restaurant name="Mehfil" location="Narayanaguda" pincode={500061}/>
//       <Dish name="Mutton Biryani" price={400}/>
//     </div>
//   )
// }

// export default App

//!04/11/2025
//!Props Destructuring
// import Trainer from './PropsDestructuring/Trainer'

// const App = () => {
//   return <>
//     <Trainer image="pavan.jpg" name="Pavan" age={16} designation="Core Java Trainer"/>
//     <Trainer image="monty.jpg" name="Monty" age={27} designation="PythonTrainer"/>
//   </>
// }

// export default App

//!05/11/2025
//!Props Drilling
// import Management from './PropsDrilling/Management'

// const App = () => {
//   return <Management/>
// }

// export default App

//!06/11/2025
//!Conditional Rendering
// import Greeting from './ConditionalRendering/Greeting'
// import UserStatus from './ConditionalRendering/UserStatus'
// import Weather from './ConditionalRendering/Weather'

// const App = () => {
//   return <>
//     <Weather temperature={25}/>
//     <UserStatus isAdmin={false}/>
//     <Greeting timeOfDay="evening"/>
//   </>
// }

// export default App

//!11/11/2025
//!useState()
// import State from './useState/State'

// const App = () => {
//   return <State/>
// }

// export default App

//!12/11/2025
//!useContext()
// import { useState } from 'react'
// import BranchHead from './useContext/BranchHead'
// import { SundayContext } from './useContext/Management'

// const App = () => {
//   let [sunday, setSunday] = useState("Management:This sunday classes will be there")
//   return <>
//     <SundayContext.Provider value={sunday}>
//       <BranchHead/>
//     </SundayContext.Provider>
//     <button onClick={()=>setSunday("Students:These people dont have any other work but we have other important work so lets skip the classes")}>Click to know the decision of students</button>
//   </>
// }

// export default App

//!14/11/2025
//!Stylings
// import Title from './Stylings/Title'
// import Card from './Stylings/Card'
// import "./Global.css"
// const App = () => {
//   return (
//     <div>
//       <Title />
//       <div className='card_container'>
//         <Card img="rahul.jpg" name="Rahul" designation="Web Trainer"/>
//         <Card img="pavan.jpg" name="Pavan" designation="Core Java Trainer"/>
//         <Card img="monty.jpg" name="Monty" designation="Python Trainer"/>
//       </div>
//     </div>
//   )
// }

// export default App

//!15/11/2025
//!Combined Task
// import { useState } from 'react'
// import { ThemeContext } from './CombinedTask/Context'
// import StudentCard from './CombinedTask/StudentCard'

// const App = () => {
//   let [theme, setTheme] = useState("light")
//   let handleTheme = () => {
//     setTheme(theme == "light" ? "dark" : "light")
//   }
//   const students = [
//     { id: 1, name: "Rahul", branch: "MECH", score: 85 },
//     { id: 2, name: "Pavan", branch: "CIVIL", score: 72 },
//     { id: 3, name: "Monty", branch: "CIVIL", score: 90 }
//   ];
//   return <>
//     <h1>Student Dashboard</h1>
//     <button onClick={handleTheme}>Switch Theme ({theme})</button>
//     <ThemeContext.Provider value={theme}>
//       {students.map((ele) => {
//         return <StudentCard key={ele.id} name={ele.name} branch={ele.branch} score={ele.score}>
//           <p>All the best! {ele.name}</p>
//         </StudentCard>
//       })}
//     </ThemeContext.Provider>
//   </>
// }

// export default App

//!18/11/2025
//!Tailwind CSS
// import HotWheels from './TailwindCSS/HotWheels'

// const App = () => {
//   return <HotWheels/>
// }

// export default App

//!29/11/2025
//!useRef()
import UncontrolledForms from './useRef/UncontrolledForms'

const App = () => {
  return <UncontrolledForms/>
}

export default App