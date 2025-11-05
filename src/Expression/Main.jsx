const Main = () => {
  let product = {
    name: "Parle-G",
    price: 5,
    availability: false
  }
  let {name,price,availability}=product
  return (
    <>
      <h1>Product Name : {name}</h1>
      <h1>Product Price : ₹{price}/-</h1>
      <h1>Availability: {availability ?"In Stock 😁" : "Out of Stock 🥺"}</h1>
    </>
  )
}

export default Main