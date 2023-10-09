import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Homepage() {

    const [user,setUser]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/getUsers");
        setUser(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table table-striped shadow">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    user.map((user,index)=>(
    <tr>
      <th scope="row" key="index">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button className='btn btn-primary mx-2'>View</button>
        <button className='btn btn-outline-primary mx-2'>Edit</button>
        <button className='btn btn-danger mx-2'>Delete</button>


      </td>
    </tr>

    ))
    }
    
  </tbody>
</table>
    </div>
    </div>
  )
}
