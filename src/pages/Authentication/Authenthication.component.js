import React from 'react';
import { connect } from 'react-redux';
import './Authentication.style.scss';

import AuthForm from '../../components/AuthForm/AuthForm.component';

import firebase from '../../util/firebase.config';
import * as creators from '../../store/actions/actions.creators';

const Authentication = props => {

  const mode = props.location.search.slice(1); // login || register || logout

  React.useEffect(() => {
    if(mode === 'logout') {
      props.logout();
      props.history.push('/');
    } else if (mode !== 'login' && mode !== 'register') {
      props.history.push('/auth?login');
    }
  }, [mode]);
 

  const handleSubmit = async (email, password) => { 
    try {
      if(mode === 'login') { 
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(creators.logout())
})

export default connect(null, mapDispatchToProps)(Authentication);