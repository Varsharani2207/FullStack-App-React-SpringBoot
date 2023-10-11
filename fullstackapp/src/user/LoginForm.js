import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {

  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {setIslogin,setUser} = useContext(LoginContext);

  // const [loginDto, setLoginDto ] = useState({email:"",password:""});

  // function handleChange(event){
  //   let newLogindto = {...loginDto};
  //   newLogindto[event.target.name]=event.target.value;
  //   setLoginDto(newLogindto);
  // }

  const handleSubmit =  (e) => {
    e.preventDefault();

    console.log("in handlesubmit");

    login({ email, password });

    // // Send formData to backend for authentication
    // try {
    //   const response = await fetch('http://localhost:8080/admin/authenticate', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginDto)
    //   });
    //   console.log("in  between handlesubmit");
    //   if (response.ok) {
    //     const data =  await response.json();
    //     console.log('Authentication successful:', data);
    //   } else {
    //     const errorData =  await response.json();
    //     console.error('Authentication failed:', errorData);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    //const authenticate = (loginDto) => axios.post("/manager/authenticate",loginDto);
    
    
    // const authenticate=(loginDto)=>
    //   axios.post("http://localhost:8080/admin/authenticate",loginDto)
    //       .then((res)=>{
    //             setUser(res.data);
    //             setIslogin(true);
    //             navigate("/");
    //             })
    //       .catch((err)=>alert("Authentication failed"+ err));

    //       console.log(loginDto);
    // authenticate(loginDto);
   //navigate("/");
    console.log("out handlesubmit");
  };

  
  return (
    <div className='container'>
      <div classname='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
          <h2 className='text-centre m-4'>Login</h2>
          <form className="container mt-5" style={{ maxWidth: "650px" }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" className="form-control" style={{ marginBottom: '10px' }} name="email" 
              placeholder="Email" value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" style={{ marginBottom: '10px' }} name="password" 
              placeholder="Password" value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary" value="submit">Login</button>
            <div>For the first Time user <Link to='/Signup'>Signup here</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

