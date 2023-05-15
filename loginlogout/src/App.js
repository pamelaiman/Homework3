import React, { useState } from 'react';
import Login from './Screens/Login';
import SuccessfulLogin from './Screens/SuccessfulLogIn';
import UnsuccessfulLogin from './Screens/UnsuccessfulLogin';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleLogin = (success) => {
    if (success) {
      setIsLoggedIn(true);
      setIsLoginFailed(false);
    } else {
      setIsLoggedIn(false);
      setIsLoginFailed(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginFailed(false);
  };

  const handleRedirect = () => {
    setIsLoginFailed(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <SuccessfulLogin onLogout={handleLogout} />
      ) : isLoginFailed ? (
        <UnsuccessfulLogin onRedirect={handleRedirect} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
