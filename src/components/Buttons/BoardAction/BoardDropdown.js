import React from 'react';

const BoardDropdown = ({
  isOpened,
  handleRemoveBoard,
  handleRemoveContentBoard,
}) => {
  return (
    <div className="board-dropdownmenu-wrapper">
      <div
        className={isOpened ? 'dropdownmenu active' : 'dropdownmenu'}
      >
        <ul>
          <li>
            <button
              className="dropdownmenu__btn deleteBtn"
              type="submit"
              onClick={handleRemoveBoard}
            >
              Remove board
            </button>
          </li>
          <li>
            <button
              className="dropdownmenu__btn"
              type="submit"
              onClick={handleRemoveContentBoard}
            >
              Remove all cards
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoardDropdown;
