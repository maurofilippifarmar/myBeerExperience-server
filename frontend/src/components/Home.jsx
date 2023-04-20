import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';
export const Home = () => {
    const { user, setUser } = useContext(MyContext);
    const [err, setErr] = useState({userName:"", email:"", password:"", age:""})
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        console.log(e);
        const userData = {
            userName: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            age: e.target.age.value,
        };
        console.log(userData);
        axios
            .post(
                "/user/register", 
                JSON.stringify(userData),
                { headers: { 'Content-Type': 'application/json' } }
                
            )
            .then((res) => {
                if (res.data.success){
                    navigate('/login')
                } else {
                    console.log(res.data.message)
                    setErr({...err, ...res.data.message[0]})
                }
               
            }) .catch((err) =>  {

            
                console.log("Error during the registration",err);
            });


           
    };

    return (
        <div>
          <h3>
            Register or <NavLink to="/login">Login</NavLink>
          </h3>
      
          <form onSubmit={register}>
            <label>User Name</label>
            <input name="username" type="text" placeholder="user name" />
            <label>Email</label>
            <input name="email" type="email" placeholder="email" />
            <label>Password</label>
            <input name="password" type="password" placeholder="password" />
            <label>Age</label>
            <input name="age" type="number" placeholder="age " />
          
          <button  className="regBTN" type="submit">
            register
          </button>
          </form>
        </div>
      );
};
