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
import Trainer from './PropsDestructuring/Trainer'

const App = () => {
  return <>
    <Trainer image="pavan.jpg" name="Pavan" age={16} designation="Core Java Trainer"/>
    <Trainer image="monty.jpg" name="Monty" age={27} designation="PythonTrainer"/>
  </>
}

export default App