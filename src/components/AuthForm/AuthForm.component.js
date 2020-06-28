import React from 'react';

import { Link } from 'react-router-dom';

import './AuthForm.style.scss';

const AuthForm = ({ mode, handleAuth }) => {

  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAuth(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="AuthForm">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"/>
      </div>
      <div className="form-group">
        <button>{mode === 'login' ? 'Login' : 'Register'}</button>
      </div>
    </form>
    {mode === 'login' 
      ? ( <p>Don't have an account? <Link to='/auth?register'>Register</Link></p>)
      : ( <p>Already have an account? <Link to='/auth?login'>Login</Link></p> )}
  </div>
  )
}

export default AuthForm;
