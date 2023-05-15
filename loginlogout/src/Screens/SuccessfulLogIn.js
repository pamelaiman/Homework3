import React from 'react';

const SuccessfulLogin = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h1>Login Successful</h1>
      <p>Welcome! You have successfully logged in.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default SuccessfulLogin;
