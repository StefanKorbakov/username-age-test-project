import React, { useState } from 'react';
import Username from './components/Username';
import UsersList from './components/UsersList';


function App() {
  const [user, setUser] = useState('');

  const addUserHandler = (userData) => {
    setUser(userData);
  }

  return (
    <div>
      <Username onAddUser={addUserHandler}/>
      <UsersList listOfUsers={user} />
    </div>
  );
}

export default App;
