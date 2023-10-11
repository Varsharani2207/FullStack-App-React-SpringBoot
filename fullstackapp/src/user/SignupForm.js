import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = () => {

  let navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    phone: '',
    gender: '',
    hearAbout: [],
    city: 'Mumbai',
    state: 'Maharashtra'
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Send formData to backend for saving
    await axios.post("http://localhost:8080/addUser",formData);
    navigate("/");
  };

  return (

    <div className='container'>
      <div classname='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
          <h2 className='text-centre m-4'>Register User</h2>
          <form className="container mt-5" style={{ maxWidth: "650px" }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" style={{ marginBottom: '10px' }} className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} pattern="[A-Za-z]+" required />
            </div>
            <div className="form-group">
              <input type="email" style={{ marginBottom: '10px' }} className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="password" style={{ marginBottom: '10px' }} className="form-control" name="password" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" style={{ marginBottom: '10px' }} className="form-control" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} pattern="[0-9]+" required />
            </div>
            <br />
            <div style={{ textAlign: 'left' }}>
              <label>Gender:</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} /> Male
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} /> Female
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Others" onChange={handleChange} checked={formData.gender === 'Others'} /> Others
              </div>
            </div>      <br />

            <div style={{ textAlign: 'left' }}>
              <label >How did you hear about this?</label><br />

              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" name="hearAbout" value="LinkedIn" onChange={handleChange} checked={formData.hearAbout.includes('LinkedIn')} /> LinkedIn
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" name="hearAbout" value="Friends" onChange={handleChange} checked={formData.hearAbout.includes('Friends')} /> Friends
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" name="hearAbout" value="Job Portal" onChange={handleChange} checked={formData.hearAbout.includes('Job Portal')} /> Job Portal
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" name="hearAbout" value="Others" onChange={handleChange} checked={formData.hearAbout.includes('Others')} /> Others
              </div>
            </div>
            <div className="form-group">
              <select className="form-control" style={{ marginBottom: '10px' }} name="city" value={formData.city} onChange={handleChange}>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="state" value={formData.state} readOnly />
            </div><br></br>
            <button type="submit" className="btn btn-outline-primary" value="submit">Register</button>
            <Link className="btn btn-outline-danger mx-2" to='/' >Cancel</Link>
          </form>

        </div>
      </div>
    </div>


  );
};

export default SignupForm;

