
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';

import PincodeInfo from './component/products/PincodeInfo';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/PincodeInfo" element={<PincodeInfo/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
