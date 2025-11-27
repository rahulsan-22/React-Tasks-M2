import React from 'react'

const Choose = ({emoji,content}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="text-4xl">{emoji}</p>
      <p className="font-semibold text-xl">{content}</p>
    </div>
  )
}

export default Choose