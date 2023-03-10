import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png';
import './LoginPage.css';
import makeRequest from '../../utils/makeRequest';
import { LOGIN } from '../../constants/apiEndpoints';
import { HOME_ROUTE } from '../../constants/routes';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();
  const [password, setPassword] = React.useState('');
  const handleSubmit = async () => {
    const token = await makeRequest.authMakeRequest(
      LOGIN,
      navigate,
      { data: { username, password } },
    );
    console.log(token);
    localStorage.setItem('token', token);
    navigate(HOME_ROUTE);
  };
  return (
    <div className="login-page">
      <div className="login-page-bg">
        <div className="login-page-text">
          <h1> Design APIs fast,</h1>
          <br />
          <h1>Manage content easily</h1>
        </div>
        <div className="login-page-bg-img">
          <img src={bgImage} alt="background" />
        </div>

      </div>
      <div className="login-page-form">
        <div className="login-page-form-title">
          <h1>Login to your CMS+ Account</h1>
        </div>
        <div className="login-page-form-fields">
          <input type="text" placeholder="Username" onChange={(value) => { setUsername(value.target.value); }} />
          <input type="password" placeholder="Password" onChange={(value) => { setPassword(value.target.value); }} />
          <button type="button" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
