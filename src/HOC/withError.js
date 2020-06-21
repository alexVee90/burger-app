import React from 'react';

import Modal from '../components/Modal/Modal.component';
import { useState, useEffect } from 'react';

const withError = (WrappedComponent, axios) => {
  console.log('wrapped in withError');

  return props => {

    const [err, setErr] = useState(false);

    useEffect( () => {
      const axInt = axios.interceptors.response.use(res => res, err => {
        setErr(err);
      });

      //component will unmount
      return () => axios.interceptors.response.eject(axInt);
    
    }, []);

    const toggleC = () => {
      setErr(!err);
    }

    return (
      <>
        {err && <Modal show={err} toggleClose={toggleC}>
          {err.message}
        </Modal>}
        <WrappedComponent {...props}/>
      </>
    )
  }
}

export default withError;