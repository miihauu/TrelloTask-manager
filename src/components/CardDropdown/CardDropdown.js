import React from 'react';

const CardDropdown = ({
  isOpened,
  handleDeleteCard,
  toggleDropdownMenu,
  setCardSettingsModalToOpen,
}) => {
  const handleClickBtn = () => {
    handleDeleteCard();
    toggleDropdownMenu();
  };

  const handleSettingsBtn = () => {
    setCardSettingsModalToOpen();
    toggleDropdownMenu();
  };

  return (
    <div
      className={isOpened ? 'dropdownmenu active' : 'dropdownmenu'}
    >
      <ul>
        <li>
          <button
            className="dropdownmenu__btn deleteBtn"
            type="submit"
            onClick={handleClickBtn}
          >
            Delete
          </button>
        </li>
        <li>
          <button
            className="dropdownmenu__btn"
            type="submit"
            onClick={handleSettingsBtn}
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardDropdown;
