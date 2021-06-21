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
    width: '50%',
    height: '35%',
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
      <div style={{ marginTop: '40px' }}>
        <Loader isLoading={true}/>
      </div>
      <h2 style={{ marginTop: '40px', textAlign: 'center' }}>
        {message}
      </h2>
      {tip && (
        <p className="text-secondary" style={{ marginTop: '20px', textAlign: 'center' }}>
          {tip}
        </p>
      )}
    </Modal>
  )
}

export default ModalComponent;