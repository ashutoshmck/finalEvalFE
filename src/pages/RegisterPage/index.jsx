import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png';
import './RegisterPage.css';
import makeRequest from '../../utils/makeRequest';
import { LOGIN, REGISTER } from '../../constants/apiEndpoints';
import { LOGIN_ROUTE } from '../../constants/routes';

function RegisterPage() {
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();
  const [password, setPassword] = React.useState('');
  const handleSubmit = async () => {
    await makeRequest.authMakeRequest(
      REGISTER,
      navigate,
      { data: { username, password } },
    );
    navigate(LOGIN);
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
          <h1>Create a CMS+ Account</h1>
        </div>
        <div className="login-page-form-fields">
          <input type="text" placeholder="Username" onChange={(value) => { setUsername(value.target.value); }} />
          <input type="password" placeholder="Password" onChange={(value) => { setPassword(value.target.value); }} />
          <button type="button" onClick={handleSubmit}>Register</button>
        </div>
        <button
          type="button"
          className="already-user-button"
          onClick={() => {
            navigate(LOGIN_ROUTE);
          }}
        >
          <p> Already a User?</p>
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
