import React from "react";
import Modal from 'react-modal';
import Loader from './loader';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '51px',
    width: '650px',
    height: '375px',
    border: '3px solid rgba(81, 247, 192, 1)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'

},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal, message, tip }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <div style={{ marginTop: '20px' }}>
        <Loader isLoading />
      </div>
      <h2 style={{ marginTop: '40px', lineHeight: '45px', textAlign: 'center', whiteSpace: 'pre-line' }}>
        {message}
      </h2>
      {tip && (
        <>
          <hr />
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            {tip}
          </p>
        </>
      )}
    </Modal>
  )
}

export default ModalComponent;