import React,{ useState } from 'react';
import './Createac.css';
import './Login';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";
function Createac() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
      });
      const navigate = useNavigate();
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
        const [username,setUsername]=useState("");
  const dispatch=useDispatch();
  const handleSubmit = async(event) => {
    event.preventDefault();
    dispatch(
      login(
          {
              name:username
          }
      )
  )
        const data = {
            name:formData.name,
            username:formData.username,
            email:formData.email,
            password:formData.password
        }
        
        await axios.post('http://127.0.0.1:8080/api/v1/auth/register',data)
        alert("Register Successful");
        navigate("/Login");
        
            
        }
      
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="login-section">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>CREATE AN ACCOUNT</h2>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Username'
                  name="username"
                  value={username} onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                <input
                  type="email"
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                <input
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="btn" type="submit">Sign Up</button>
              <div className="create-account">
                <p>Have an account? <Link to="/Login"><a href="#" className="register-link">Login Here</a></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
    
}export default Createac;