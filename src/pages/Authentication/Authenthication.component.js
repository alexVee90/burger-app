import React from 'react';

import './Authentication.style.scss';

import AuthForm from '../../components/AuthForm/AuthForm.component';

import firebase from '../../util/firebase.config';

const Authentication = props => {

  const mode = props.location.search.slice(1); // login || register

  React.useEffect(() => {
    if(mode !== 'login' && mode !== 'register') props.history.push('/auth?register');
  }, [mode]);


  const handleSubmit = async (email, password) => { 
    try {
      if(mode === 'login') { 
        console.log('loging');
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        props.history.push('/');
      } 
      else if (mode === 'register') { 
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password) 
        props.history.push('/');
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="Authentication">
      <AuthForm mode={mode} handleAuth={handleSubmit} />
    </div>
  )
};

export default Authentication;