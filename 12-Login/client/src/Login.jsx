import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const[email,setEmail] = React.useState("");
    const[password,setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/login', {email,password})
        .then((res)=>{
          console.log(res)
          if(res.data==="Success")
          {
            navigate('/home')
          }
        })
        .catch((err)=>console.log(err))
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e)=>setPassword(e.target.value)}

            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

      </div> 
    </div>
  );
}

export default Login;

