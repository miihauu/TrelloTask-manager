import React from 'react';
import Backdrop from './Backdrop';

const ConfirmModal = ({
  dialogOpen,
  handleAction,
  turnOffConfirmModal,
  modalQuestion,
}) => {
  const handleConfirmModal = () => {
    handleAction();
    turnOffConfirmModal();
  };

  return (
    <>
      {dialogOpen && (
        <>
          <Backdrop />
          <div className="confirm-modal">
            <div className="modal-question">{modalQuestion}</div>
            <div className="confirm-modal__buttons">
              <button
                type="submit"
                className="confirmation-button"
                onClick={handleConfirmModal}
              >
                Yes
              </button>
              <button type="submit" onClick={turnOffConfirmModal}>
                No
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmModal;
