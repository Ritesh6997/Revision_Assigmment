import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Product from './components/Product';
import {Route,Routes} from 'react-router-dom'
import Signup from './components/signup';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/Addproduct' element={<Form />}></Route>
        <Route path='/signUp' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
