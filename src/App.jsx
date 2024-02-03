import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import { UserContext } from './context/Context';
import Genres from './pages/Genres';
import Products from './pages/Products';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import GenresContainer from './context/GenresContainer';

function App() {
  const {user, setUser} = useContext(UserContext);
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("token");
  };
  return (
    <>
      <header key="header">
        <nav>
          <ul>
            <li><NavLink to="/">Logo</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/books">Books</NavLink></li>
            {
              !user ? (
                <>
                  <li><NavLink to="/signup">Sign Up</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </>
                ) : (
                <>
                  <li><NavLink to="/profile">Profile</NavLink></li>
                  <li onClick={logout}><NavLink to="/">Logout</NavLink></li>
                </>
            )}
          </ul>
        </nav>
      </header>
      <main key="main">
        <GenresContainer>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books" element={<Genres/>}>
              <Route path="/books/genre/:genre" element={<Products/>}/>
            </Route>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>            
          </Routes>
        </GenresContainer>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Zett</p>
      </footer>
    </>
  );
};

export default App;
