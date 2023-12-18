import { Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Ul from './components/Ul';
import Home from './pages/Home';
import LiNavLink from './components/LiNavLink';

function App() {
  return (
    <>
      <header>
        <Nav>
          <Ul>
            <LiNavLink go={{where: "/", text: "Logo"}}/>
          </Ul>
          <Ul>
            <LiNavLink go={{where: "/", text: "Home"}}/>
          </Ul>
        </Nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
