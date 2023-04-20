import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Container from './context/Container.jsx';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Container>
            <App />
        </Container>
    </BrowserRouter>
);
