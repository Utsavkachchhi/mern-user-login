import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerRegister from './pages/CustomerRegister';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
   <Router>
      <Routes>
      <Route path="/" element={<AdminLogin/>}/>
      <Route path="/register/customer" element={<CustomerRegister/>} />
      <Route  path="/register/admin" element={<AdminRegister />} />
      <Route path="/verify-email" element={<VerifyEmail/>} />
      </Routes>
   </Router>
  );
}

export default App;
