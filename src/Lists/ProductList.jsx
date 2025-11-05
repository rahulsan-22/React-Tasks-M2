const ProductList = () => {
  const products = [
  { id: 1, name: "T-Shirt", price: "₹699" },
  { id: 2, name: "Jeans", price: "₹1200" },
  { id: 3, name: "Shoes", price: "₹999" },
];
  return (
    <>
     <h1>List of Products</h1>
     {products.map((ele)=>{
       return <div key={ele.id}>
          <h1>Product Name : <mark>{ele.name}</mark></h1>
          <p>Price : <mark>{ele.price}</mark></p>
       </div>
     })}
    </>
  )
}

export default ProductList