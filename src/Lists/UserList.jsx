const UserList = () => {
  const users = [
  { id: 1, name: "Monty", age: 27 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Pavan", age: 25 },
];
  return (
    <>
    <h1>List of Users</h1>
      {users.map((ele)=>{
        return <div key={ele.id}>
          <h1>My name is : <mark>{ele.name}</mark></h1>
          <p>I am <mark>{ele.age}</mark> years old</p>
        </div>
      })}
    </>
  )
}

export default UserList