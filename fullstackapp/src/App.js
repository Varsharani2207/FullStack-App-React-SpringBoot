import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
       </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
