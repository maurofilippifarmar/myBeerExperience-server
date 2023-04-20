import React from 'react';
import { MyContext } from './context.js';
// import axios from 'axios';
import { useState } from 'react';
export default function Container({ children }) {
    const [user, setUser] = useState();

    return (
        <MyContext.Provider value={{ user, setUser }}>
            {children}
        </MyContext.Provider>
    );
}
