const Header = () => {
  let date = new Date()
  return <header>
    <h1>Welcome User 🌤️</h1>
    <p>Today is <mark>{date.toDateString()}</mark></p>
  </header>
}

export default Header