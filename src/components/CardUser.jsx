
import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
    
    const handleDelete = () => {
        deleteUser('/users', user.id);
    }
    
    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

    console.log(user.id);

  return (
    <div className='container'>
        <article className='card-article'>
            <div className='card-user'>
                <h3>{user.first_name} {user.last_name}</h3>
                <ul>
                    <li><span>Correo: </span><span>{user.email}</span></li>
                    <li><span><box-icon name='gift'></box-icon>  Birthday: </span><span>{user.birthday}</span></li>
                </ul>
                <div className='card-btn'>
                    <div className='card-btn-del' >
                        <button onClick={handleDelete}>
                            <box-icon name='trash'></box-icon>
                        </button>
                    </div>
                    <div className='card-btn-edt'>
                        <button  onClick={handleEdit}>
                            <box-icon type='solid' name='edit'></box-icon>
                        </button>
                    </div>
                </div>
                
            </div>
        </article>
    </div>
  )
}

export default CardUser;