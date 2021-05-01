import './UsernameForm.css'

const UsernameForm = () => {
  return (
    <form>
      <div className="username_form">
        <label>Username</label>
        <input></input>
      </div>
      <div className="username_form">
        <label>Age (Years)</label>
        <input></input>
      </div>
      <div className="username_form">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default UsernameForm;