import './App.css';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Posts from './pages/posts/Posts';

function App() {
  return (
    <div className="App">
      <header>
      <NavBarTop></NavBarTop>
      </header>

      <main>
      <Routes>
        <Route exact path="/" element={<Posts />}></Route>
        <Route exact path="/login" element={<Login />}></Route> 
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/search" element={<div>Search</div>}></Route>
        <Route exact path="/notifications" element={<div>Notifications</div>}></Route>
        <Route exact path="/user" element={<div>user</div>}></Route>
        <Route exact path="/trending" element={<Posts />} />
        <Route exact path="/new" element={<Posts />} />
        {/* 404 page*/}
        <Route exact path="*" element={<div>404 not found</div>}></Route>
      </Routes>
      </main>

      <footer>
      <NavBarBottom></NavBarBottom>
      </footer>
    </div>
  );
}

export default App;
