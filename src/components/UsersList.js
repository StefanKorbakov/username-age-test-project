import './UsersList.css';
import User from './User'

const Users = (props) => {
  if (props.listOfUsers.length === 0) {
    return (null);
  }
  
  return (
    <ul className="userlist">
      <User />
    </ul>
  )
}

export default Users;