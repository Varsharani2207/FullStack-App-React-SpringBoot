import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ?
        (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value))
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend for saving
  };

  return (
    <div className='container'>
      <div classname='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
          <h2 className='text-centre m-4'>Login</h2>
          <form className="container mt-5" style={{ maxWidth: "650px" }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" className="form-control" style={{ marginBottom: '10px' }}name="name" placeholder="Email" value={formData.name} onChange={handleChange} pattern="[A-Za-z]+" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" style={{ marginBottom: '10px' }}name="email" placeholder="Password" value={formData.email} onChange={handleChange} required />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Login</button>
            <div>For the first Time user <Link to='/Signup'>Signup here</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

