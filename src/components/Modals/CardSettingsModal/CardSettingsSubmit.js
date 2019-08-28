import React from 'react';

const CardSettingsSubmit = ({
  handleSubmitPriority,
  setCardSettingsModalToClose,
}) => {
  const handleSubmitButton = () => {
    handleSubmitPriority();
    setCardSettingsModalToClose();
  };

  return (
    <div className="card-settings__submit">
      <button
        type="submit"
        className="priority-button priority-button__high"
        value="high"
        onClick={handleSubmitButton}
      >
        Submit
      </button>
    </div>
  );
};

export default CardSettingsSubmit;
