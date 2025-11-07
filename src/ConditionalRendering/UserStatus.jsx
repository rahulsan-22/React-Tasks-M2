const UserStatus = ({isAdmin}) => {
  return (
    <div>
      {isAdmin && <h1>Welcome Admin!</h1>}
    </div>
  )
}

export default UserStatus