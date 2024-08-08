import React from 'react';
import '../css/login.css'; 
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className='but'>Log In</button>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
      </form>
    </div>
  );
}

export default LoginPage;
