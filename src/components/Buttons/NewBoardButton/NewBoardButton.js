import React from 'react';
import shortid from 'shortid';

const NewBoardButton = ({ addNewBoard }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const boardId = shortid.generate();
    addNewBoard(boardId);
  };

  return (
    <div className="newboard-button">
      <button type="submit" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};

export default NewBoardButton;
