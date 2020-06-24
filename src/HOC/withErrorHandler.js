import React from 'react';
import Modal from '../components/Modal/Modal.component';

export default (WrappedComponent) => {
  return (props) => {
    return (
      <>
        {props.error && (
          <Modal show={props.error} toggleClose={props.clearError}>
            {props.error}
          </Modal>
        )}
        <WrappedComponent {...props} />
      </>
    );
  };
};
