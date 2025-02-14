import { useState } from 'react';
import axios from 'axios';
import '../assets/registrationForm.css';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword :''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };
      const response = await axios.post('http://localhost:8000/api/register?role=admin', payload);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword :''
      })
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
        <h2>admin Register</h2>
      <input 
        type="text"
        name="firstName" 
        placeholder="First Name" 
        onChange={handleChange} 
        autoComplete="off"
        className="input"
        required />

      <input
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        onChange={handleChange} 
        autoComplete="off"
        className="input"
        required />

      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange}
        autoComplete="off" 
        className="input"
        required />

      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}
        autoComplete="off"
        className="input" 
        required />

      <input 
        type="password" 
        name="confirmPassword" 
        placeholder="confirmPassword" 
        onChange={handleChange}
        autoComplete="off"
        className="input" 
        required />

      <button type="submit" className="button">Register as Admin</button>
    </form>
  );
};

export default AdminRegister;
