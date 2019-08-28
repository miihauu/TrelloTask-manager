import React from 'react';
import ClickOutsideWrapper from '../ClickOutsideWrapper/ClickOutsideWrapper';

const BoardCardContent = ({
  cardContent,
  turnOnEditCard,
  cardContentEditable,
  handleChangeCardContent,
  handleSubmitCardContent,
  newCardContentValue,
  turnOffEditCard,
}) => {
  const handleSubmitCard = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmitCardContent();
    }
  };

  return (
    <ClickOutsideWrapper handleClickOutside={turnOffEditCard}>
      <div className="card__content">
        <div className="text" onDoubleClick={turnOnEditCard}>
          {cardContentEditable ? (
            <form onSubmit={handleSubmitCard}>
              <textarea
                defaultValue={cardContent}
                onChange={handleChangeCardContent}
                value={newCardContentValue}
                onKeyDown={handleSubmitCard}
              />
            </form>
          ) : (
            <p>{cardContent}</p>
          )}
        </div>
      </div>
    </ClickOutsideWrapper>
  );
};

export default BoardCardContent;
