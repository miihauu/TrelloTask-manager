import React from 'react';

const CardSettingsDescription = ({
  cardDescription,
  cardDescriptionOpen,
  setCardDescriptionToOpen,
  handleSubmitCardDescription,
}) => {
  return (
    <div className="card-settings-description">
      <div className="card-settings-description__header">
        Description
      </div>
      <div
        className="card-settings-description__content"
        onClick={setCardDescriptionToOpen}
      >
        {cardDescriptionOpen ? (
          <textarea
            defaultValue={cardDescription}
            onKeyDown={handleSubmitCardDescription}
          />
        ) : (
          <span>{cardDescription}</span>
        )}
      </div>
    </div>
  );
};

export default CardSettingsDescription;
