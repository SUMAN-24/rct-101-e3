import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds,setLoginCreds] = useState({});
  const {login}=useContext(AuthContext);

  const handleChange =(e)=>{
    const {name,value}=e.target;
    setLoginCreds({
      ...loginCreds,
      [name] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  }
  return (
    <div>Login
      <input onChange={handleChange} name='email' type='text' data-cy="login-email" />
      <input onChange={handleChange} name='password' type='password' data-cy="login-password" />
      <button onSubmit={handleSubmit} data-cy="login-submit">login</button>
    </div>
  );
};

export default Login;
