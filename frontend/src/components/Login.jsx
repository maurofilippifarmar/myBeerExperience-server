import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import { useContext } from 'react';
export const Login = () => {
    const { setUser } = useContext(MyContext);
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        const userReq = {
            password: e.target.password.value,
            email: e.target.email.value,
        };
        axios
            .post('/user/login/', userReq)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    localStorage.setItem('token', res.headers.token);
                    setUser(res.data.data);
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    navigate('/profile');
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <label>Password</label>
                <input name='password' type='password' />
                <label>Email</label>
                <input name='email' type='email' />
                <button>LOGIN</button>
            </form>
            <NavLink to={'/'}>back</NavLink>
        </div>
    );
};
