const Student = ({ courseName2, price2, yop2, children2 }) => {
  return (
    <div>
      <h1>Course: {courseName2}</h1>
      <h1>Price: {price2}</h1>
      <h1>Yop: {yop2}</h1>
      {children2}
    </div>
  )
}

export default Student