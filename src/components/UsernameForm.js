import React, { useState } from 'react';
import './UsernameForm.css'

const UsernameForm = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      userName: enteredUser,
      userAge: enteredAge
    };

    props.onSaveUserData(userData);
    setEnteredUser('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="username_form">
        <label>Username</label>
        <input type="text" value={enteredUser} onChange={userChangeHandler} ></input>
      </div>
      <div className="username_form">
        <label>Age (Years)</label>
        <input type="number" min="1" step="1" value={enteredAge} onChange={ageChangeHandler} ></input>
      </div>
      <div className="username_form">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default UsernameForm;