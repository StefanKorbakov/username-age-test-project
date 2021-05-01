import UsernameForm from './UsernameForm';
import './Username.css';

const Username = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
  }

  return (
    <div className="username_section">
        <UsernameForm onSaveUserData={saveUserDataHandler}/>
    </div>
  );
};

export default Username;
