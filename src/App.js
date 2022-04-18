import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequierAuth/RequierAuth';
import Chickout from './components/Chickout/Chickout';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div> 
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/service/:serviceId" element={
          <RequireAuth>
            <Chickout></Chickout>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
