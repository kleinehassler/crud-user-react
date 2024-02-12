
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';


const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {
     
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
      reset(editUser);     
    }, [editUser])
    
    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data);
            setEditUser();
        } else {
            createUser('/users', data);
        }
       
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });

        setIsOpen(false);
        
    }

    const handleClose =() => {
        setIsOpen(false);
    }

  return (
    <div className={`form__background ${isOpen&&'able'}`}>
        <form className='form__container' onSubmit={handleSubmit(submit)}>
            <div className='form__close'><box-icon name='x-circle' ></box-icon></div>
            <h2 className='form__title'>
                <box-icon type='solid' name='user-rectangle'></box-icon>
            </h2>
            <h3 className='form__title'> .:Register of User:. </h3>
            <div className='form__item'>
                <label htmlFor="email">Email of User: </label>
                <input {...register('email')} id='email' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password of Users: </label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='form__item'>
                <label htmlFor="first_name">First Name User: </label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last Name User: </label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='form__item'>
                <box-icon name='gift'></box-icon>  
                <label htmlFor="birthday">Birthday of User: </label>
                <input {...register('birthday')} id='birthday' type="date" />
            </div>
            <button className='form__btn'>Register</button>
        </form>
    </div>
  )
};

export default FormUser;
