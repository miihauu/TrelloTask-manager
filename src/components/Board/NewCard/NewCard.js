import React from 'react';
import NewCardInput from './NewCardInput';

const NewCard = ({ handleAddCard, boardId }) => {
  return (
    <div className="board__newcard">
      <NewCardInput boardId={boardId} handleAddCard={handleAddCard} />
    </div>
  );
};

export default NewCard;
