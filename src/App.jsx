import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import { Context } from './context/Context';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const {user} = useContext(Context);
  const logout = () => sessionStorage.removeItem("token");
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Logo</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li onClick={logout}><NavLink to="/">Logout</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
