const Trainer = ({image,name,age,designation}) => {
  return (
    <div>
      <img src={image} alt={name} height="300" width="300"/>
      <h1>{name}</h1>
      <p>I am {age} years old</p>
      <p>I am {designation}</p>
    </div>
  )
}

export default Trainer