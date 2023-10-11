import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

export default function ViewUser() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        hearAbout: [],
        city: 'Mumbai',
        state: 'Maharashtra'
      });
    
const { id } = useParams();

useEffect(() => {
  loadUser();
}, []);

const loadUser = async () => {
  const result = await axios.get(`http://localhost:8080/getUser/${id}`);
  setFormData(result.data);
};

return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">User Details</h2>

        <div className="card">
          <div className="card-header">
           <strong>User Details  </strong> 
            <ul className="list-group list-group-flush" style={{textAlign: "left"}} >
              <li className="list-group-item">
                <b>Id:</b>
                {formData.id}
              </li>
              <li className="list-group-item">
                <b>Name:</b>
                {formData.name}
              </li>
              <li className="list-group-item">
                <b>Email:</b>
                {formData.email}
              </li>
              <li className="list-group-item">
                <b>Phone:</b>
                {formData.phone}
              </li>
              
            
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
          Back to Home
        </Link>
                </div>
            </div>
        </div>
    )
}
