const Restaurant = ({name,location,pincode}) => {
  return (
    <div>
      <h2>Name : {name}</h2>
      <p>Location : {location}</p>
      <p>Pincode : {pincode}</p>
    </div>
  )
}

export default Restaurant