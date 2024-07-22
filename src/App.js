import './App.css';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';
import { Route, Routes } from "react-router-dom";
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import PostsPage from './pages/posts/PostsPage';
import PostPage from './pages/posts/PostPage';
import UserProfile from './pages/profiles/UserProfile';

function App() {
  return (
    <div className="App">
      <header>
      <NavBarTop></NavBarTop>
      </header>

      <main>
      <Routes>
        <Route exact path="/" element={<PostsPage />}></Route>
        <Route exact path="/login" element={<Login />}></Route> 
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/search" element={<div>Search</div>}></Route>
        <Route exact path="/notifications" element={<div>Notifications</div>}></Route>
        <Route exact path="/user" element={<UserProfile />}></Route>
        <Route exact path="/trending" element={<PostsPage />} />
        <Route exact path="/new" element={<PostsPage />} />
        <Route exact path="/post" element={<PostPage />} />
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
