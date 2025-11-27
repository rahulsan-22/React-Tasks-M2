import React from 'react'
import Cards from './Cards'
import Choose from './Choose'

const Section = () => {
  let carDetails = [
    {
      img:"https://images.unsplash.com/photo-1648711727240-7ee250483923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww",
      name:'Blue Mini Supercar',
      desc:"High-speed mini racer",
      price:"₹499"
    },
    {
      img:"https://images.unsplash.com/photo-1648711085453-1ad7ef382e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww",
      name:'Yellow Drift Car',
      desc:"Limited edition drift model",
      price:"₹599"
    },
    {
      img:"https://i.ytimg.com/vi/8DHdVqRbVvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNm1MKLuCM2rCdMQavC9cYMlOSxQ",
      name:'Red Mini Supercar',
      desc:"Futuristic design & fast",
      price:"₹699",  
    }
  ]
  let chooseUs = [
    {
      emoji:"🚗",
      content:"Premium Collections",
    },
    {
      emoji:"⚡",
      content:"Fast Delivery",
    },
    {
      emoji:"💳",
      content:"Secure Payments",
    }
  ]
  return (
    <section className="bg-gray-50">
      <h1 className="text-center  pt-12 text-3xl font-bold">Featured Toy Cars</h1>
      <article className="flex justify-evenly items-center py-5 flex-wrap">
       {
        carDetails.map((ele,ind)=><Cards {...ele} key={ind}/>)
       }
      </article>
      <section className="bg-white">
        <h1 className="text-center  pt-12 text-3xl font-bold">Why Choose Us?</h1>
        <article className="flex justify-evenly items-center py-14 flex-wrap">
          {
            chooseUs.map((ele,ind)=> <Choose {...ele} key={ind}/>)
          }
        </article>
      </section>
    </section>
  )
}

export default Section