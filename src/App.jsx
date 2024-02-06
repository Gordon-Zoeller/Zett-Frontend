import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import { UserContext } from './context/Context';
import Genres from './pages/genres/Genres';
import Products from './pages/products/Products';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import Profile from './pages/user/profile/Profile';
import SignUp from './pages/signup/SignUp';
import GenresContainer from './context/GenresContainer';
import {FaBars, FaGithub, FaSearch, FaShoppingCart, FaUser, FaUserAstronaut} from "react-icons/fa";
import User from './pages/user/User';
import Admin from './pages/admin/Admin';
import Book from './pages/admin/book/Book';
import Movie from "./pages/admin/movie/Movie";

function App() {
  const {user, setUser} = useContext(UserContext);
  const signout = () => {
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
                  <li><NavLink to="/signin">Sign In</NavLink></li>
                </>
                ) : (
                <>
                  <li><FaUser/></li>
                  <ul>
                    <li><NavLink to="/user/profile">Profile</NavLink></li>
                    {
                      user?.role === "admin" && <li><NavLink to="/user/admin">Admin</NavLink></li>
                    }
                    <li onClick={signout}><NavLink to="/">Sign Out</NavLink></li>
                  </ul>
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
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/user" element={<User/>}>
              <Route path="/user/profile" element={<Profile/>}/>
              <Route path="/user/admin" element={<Admin/>}>
                <Route path="/user/admin/book" element={<Book/>}/>
                <Route path="/user/admin/movie" element={<Movie/>}/>
              </Route>
            </Route>       
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
