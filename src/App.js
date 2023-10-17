import React from 'react';
import AddUser from '../src/Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser/>
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
