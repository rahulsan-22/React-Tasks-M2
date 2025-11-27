import React from 'react'

const Cards = ({img,name,desc,price}) => {
  return (
     <div className="p-4 rounded-2xl bg-white shadow my-4">
            <img src={img} alt="Car1" className="h-[200px] w-[450px] object-cover rounded-2xl" />
            <h1 className="text-2xl font-semibold my-2">{name}</h1>
            <p className="text-gray-800">{desc}</p>
            <p className="text-blue-600 font-bold mt-4">{price}</p>
      </div>
  )
}

export default Cards