import './App.css';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login';

function App() {
  return (
    <div className="App">
      <header>
      <NavBarTop></NavBarTop>
      </header>

      <main>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<div>Sign up</div>}></Route>
        <Route path="/search" element={<div>Search</div>}></Route>
        <Route path="/notifications" element={<div>Notifications</div>}></Route>
        <Route path="/user" element={<div>user</div>}></Route>
      </Routes>
      </main>
      
      <footer>
      <NavBarBottom></NavBarBottom>
      </footer>
    </div>
  );
}

export default App;
