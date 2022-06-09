import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Product from './components/Product';
import {Route,Routes} from 'react-router-dom'
import SignIn from './components/signup';
import Login from './components/Login';
import Home from "./components/Home"
import Brand from './components/Brand';
import Addaddress from './components/AddAddress';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/Addproduct' element={<Form />}></Route>
        <Route path='/Brand' element={<Brand/>}></Route>
        <Route path='/signUp' element={<SignIn />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/address' element={<Addaddress/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
