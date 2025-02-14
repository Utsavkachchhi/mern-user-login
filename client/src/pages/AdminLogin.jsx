import { useState } from "react";
import axios from "axios";
import  '../assets/login.css';
import { Link } from "react-router-dom";
const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", formData);      
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
        console.log(error);
        setError(error.response.data.message);
        alert(error.response.data.message)
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
      <div className="input-container">
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
        autoComplete="off"
        className="input" 
        required />
       </div>

       <div className="input-container">
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}
        className="input"  
        required />
       </div>

      <button
        type="submit" 
        className="button">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>

    <div className="link-container">
    <Link  to="/register/customer" className="link">Register as customer</Link>
    <Link to="/register/admin" className="link">Register as admin</Link>
    </div>
    </>
  );
};

export default AdminLogin;
