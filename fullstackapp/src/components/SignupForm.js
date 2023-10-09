import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend for saving
  };

  return (
    <div className='w-100 mx-auto mt-4 p-4 item-center' style={{ backgroundColor: " ", height: "45vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
    <form className="container mt-5" style={{maxWidth: "650px"}} onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} pattern="[A-Za-z]+" required />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <input type="tel" className="form-control" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} pattern="[0-9]+" required />
      </div>
      <br/>
      <div>
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
      </div>      <br/>

      <div>
        <label>How did you hear about this?</label>
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
        <select className="form-control" name="city" value={formData.city} onChange={handleChange}>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="state" value={formData.state} readOnly />
      </div><br></br>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
    </div>
  );
};

export default SignupForm;

