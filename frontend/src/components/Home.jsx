import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';
export const Home = () => {
    const { user, setUser } = useContext(MyContext);
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        const userData = {
            userName: e.target.username,
            email: e.target.email,
            password: e.target.password,
            age: e.target.age,
        };
        axios
            .post(
                'http://localhost:3000/user/register',
                JSON.stringify(userData),
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then((res) => {
                setUser(userData);
                navigate('/login');
            });
    };

    return (
        <div>
            <h3>
                Registert or <NavLink to='/login'>Login</NavLink>
            </h3>

            <form>
                <label>User Name</label>
                <input name='username' type='text' placeholder='user name' />
                <label>Email</label>
                <input name='email' type='email' placeholder='email' />
                <label>Password</label>
                <input name='password' type='password' placeholder='password' />
                <label>Age</label>
                <input type='number' typeof='age' placeholder='age ' />
            </form>
            <button onClick={register} className='regBTN' type='submit'>
                register
            </button>
        </div>
    );
};
