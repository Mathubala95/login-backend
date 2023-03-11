import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
// import "./css/style.css";
import Login from './Login';
import Registration from './Registration';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Portal from './Portal';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/passwordReset' element={<Resetpassword/>}></Route>
      <Route path='/portal' element={<Portal/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
