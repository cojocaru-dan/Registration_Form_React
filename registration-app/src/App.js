import './App.css';
import InputField from './components/InputField';
import {useState} from "react";

function App() {
  const [submitted, setSubmitted] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const newState = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      username: event.target[2].value,
      email: event.target[3].value,
      phonenumber: event.target[4].value,
      password: event.target[5].value
    }
    console.log(newState);

    setSubmitted(newState);

    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(event.target[4].value);
    console.log(event.target[5].value);

    console.log("submitted", submitted);
  }

  const inputFields = [
    {className: 'firstName', type: 'text', label: 'First Name:'},
    {className: 'lastName', type: 'text', label: 'Last Name:'},
    {className: 'userName', type: 'text', label: 'User Name:'},
    {className: 'email', type: 'email', label: 'Email:'},
    {className: 'phoneNumber', type: 'tel', label: 'Phone Number:'},
    {className: 'password', type: 'password', label: 'Password:'},
  ];

  return (
    <div className="App">
      {Object.keys(submitted).length === 6 ? (
        <h2>Thank you for registering!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputObj, index) => (
            <InputField 
              key={index}
              className={inputObj.className}
              type={inputObj.type}
              label={inputObj.label}
            />
          ))}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default App;
