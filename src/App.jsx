import { useContext } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import { ProductContext, UserContext } from './context/Context';
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
import NotFound from "./pages/notFound/NotFound";
import Album from './pages/admin/album/Album';

function App() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);
  const {formRef} = useContext(ProductContext);
  const search = async (e) => {
    e.preventDefault();
    const query = e.target.search.value.replaceAll(" ", "+");
    const category = e.target.category.value;
    e.target.search.value = "";
    navigate(`/${category}/search?q=${query}&c=${category}`);
  };
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
            <li>
              <search>
                <form onSubmit={search}>
                  <select ref={formRef} name="category" id="category">
                    <option value="books">Books</option>
                    <option value="movies">Movies</option>
                    <option value="albums">Albums</option>
                  </select>
                  <input type="search" name="search" id="search" />
                  <button type="submit">
                    <FaSearch className="icon"/>
                  </button>
                </form>
              </search>
            </li>
          </ul>
          <ul>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            {
              !user ? (
                <>
                  <li><NavLink to="/signup">Sign Up</NavLink></li>
                  <li><NavLink to="/signin">Sign In</NavLink></li>
                </>
                ) : (
                <>
                  <li><FaUser className="icon"/></li>
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
            <Route path="/books" element={<Genres category="books"/>}>
              <Route path="/books/genre/:genre" element={<Products/>}/>
              <Route path="/books/:search" element={<Products/>}/>
            </Route>
            <Route path="/movies" element={<Genres category="movies"/>}>
              <Route path="/movies/genre/:genre" element={<Products/>}/>
              <Route path="/movies/:search" element={<Products/>}/>
            </Route>
            <Route path="/albums" element={<Genres category="albums"/>}>
              <Route path="/albums/genre/:genre" element={<Products/>}/>
              <Route path="/albums/:search" element={<Products/>}/>
            </Route>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/user" element={<User/>}>
              <Route path="/user/profile" element={<Profile/>}/>
              <Route path="/user/admin" element={<Admin/>}>
                <Route path="/user/admin/book" element={<Book/>}/>
                <Route path="/user/admin/movie" element={<Movie/>}/>
                <Route path="/user/admin/album" element={<Album/>}/>
              </Route>
            </Route>
            <Route path="*" element={<NotFound/>}/>
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
