import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
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
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
