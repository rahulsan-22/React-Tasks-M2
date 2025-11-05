1)Create a folder called Lists inside src
2)Create a UserList Component called UserList.jsx.
3)Inside UserList.jsx create a users array with the following objects, where each object represents a user with id, name, and age:
const users = [
  { id: 1, name: "Monty", age: 27 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Pavan", age: 25 },
];
Use the .map() method to render a list of users. Each user's name and age should be displayed inside a <div> element. Use the id as the unique key for each list item.
4)Create a ProductList Component called ProductList.jsx.
5)Inside ProductList.jsx Create a products array with the following objects, where each object represents a product with id, name, and price:
const products = [
  { id: 1, name: "T-Shirt", price: "₹699" },
  { id: 2, name: "Jeans", price: "₹1200" },
  { id: 3, name: "Shoes", price: "₹999" },
];
Use the .map() method to render the list of products. Each product’s name and price should be displayed inside a <div> element. Use the id as the key for each product.
6)Render both UserList.jsx and ProductList.jsx Components in App.jsx later into Main.jsx
