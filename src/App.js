import React, {useState} from 'react';
import AddUser from '../src/Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const  [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]);
    console.log(usersList);
  }
  

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
