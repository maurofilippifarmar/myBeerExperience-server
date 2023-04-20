import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Login } from './components/Login.jsx';
import { User } from './components/User.jsx';
import { AllBeers } from './components/AllBears';
function App() {
    return (
        <>
            <h1>my beer experience</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<User />} />
                <Route path='/allbeers' element={<AllBeers />} />
                <Route path='/randombeer' element={<AllBeers />} />
                <Route path='/login' element={<Login />}></Route>
            
            </Routes>
        </>
    );
}
export default App;
