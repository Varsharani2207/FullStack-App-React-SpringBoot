import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

const EditUser = () =>  {

  const {id}=useParams();
  let navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

useEffect(()=>{
    loadUser()
    },[]);

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
    await axios.put(`http://localhost:8080/getUser/${id}`,formData);
    navigate("/");
  };    

    const loadUser= async()=>{
        const result= await axios.get(`http://localhost:8080/getUser/${id}`);
        setFormData(result.data);
    }

  return (

    <div className='container'>
      <div classname='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
          <h2 className='text-centre m-4'>Edit User</h2>
          <form className="container mt-5" style={{ maxWidth: "650px" }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" style={{ marginBottom: '10px' }} className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} pattern="[A-Za-z]+" required />
            </div>
            <div className="form-group">
              <input type="email" style={{ marginBottom: '10px' }} className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" style={{ marginBottom: '10px' }} className="form-control" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} pattern="[0-9]+" required />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-primary" value="submit">Update</button>
            <Link className="btn btn-outline-danger mx-2" to='/' >Cancel</Link>
          </form>

        </div>
      </div>
    </div>


  );
};

export default EditUser;

