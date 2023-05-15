import React from 'react';

const UnsuccessfulLogin = ({ onRedirect }) => {
  const handleRedirect = () => {
    onRedirect();
  };

  return (
    <div>
      <h1>Login Unsuccessful</h1>
      <p>Sorry, the username or password is incorrect.</p>
      <button onClick={handleRedirect}>Back to Login</button>
    </div>
  );
};

export default UnsuccessfulLogin;
