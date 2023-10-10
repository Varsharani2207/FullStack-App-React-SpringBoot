import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignupForm from './user/SignupForm';
import LoginForm from './user/LoginForm';
import NavBar from './layout/NavBar';
import Homepage from './pages/Homepage';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/edituser/:id' element={<EditUser/>} />
          <Route path='/viewuser/:id' element={<ViewUser/>} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
