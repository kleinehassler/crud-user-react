
import './App.css';
import useCrud from './hooks/useCrud';
import { useState, useEffect } from 'react';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';


function App() {

  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen]=useState(false);
  // const url = 'https://users-crud.academlo.tech';
  const url = 'https://cruduserapiexp.onrender.com/api/v1';
  
  const [users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url);

  useEffect(() => {
    getUsers('/users');
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  }
 // console.log(users);
  return (
    <>
    <div>
      <h1 className='app__title'>CRUD USERS</h1>
      <button className='app__btn' onClick={handleOpen}> + New User </button>
      <FormUser 
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}

      />
      <div>
        {
          users?.map(user => (
            <CardUser 
              key={user.id}
              user={user}
              deleteUser = {deleteUser}
              setEditUser = {setEditUser}
              setIsOpen = {setIsOpen}
            />
          ))
        }
      </div>
    </div>

    Made by Kleine Hassler 

    </>
  )
}

export default App;
