


// src/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h3 className="login-heading">Log In</h3>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
