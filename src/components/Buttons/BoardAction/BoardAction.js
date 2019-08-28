import React from 'react';
import DotsSvg from './dots.svg';
import BoardDropdown from './BoardDropdown';
import ClickOutsideWrapper from '../../ClickOutsideWrapper/ClickOutsideWrapper';
import ConfirmModal from '../../Modals/ConfirmModal';
import Modal from '../../Modals/Modal';

class BoardAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDropdownOpen: false,
      dialogOpen: false,
      removingBoard: false,
      removingContentBoard: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      cardDropdownOpen: !prevState.cardDropdownOpen,
    }));
  };

  turnOffDropdown = () => {
    this.setState({
      cardDropdownOpen: false,
    });
  };

  onClickRemoveBoard = () => {
    this.setState({
      dialogOpen: true,
      removingBoard: true,
    });
    this.turnOffDropdown();
  };

  onClickRemoveContentBoard = () => {
    this.setState({
      dialogOpen: true,
      removingContentBoard: true,
    });
    this.turnOffDropdown();
  };

  turnOffConfirmModal = () => {
    this.setState({
      dialogOpen: false,
      removingBoard: false,
      removingContentBoard: false,
    });
  };

  render() {
    const {
      turnOffConfirmModal,
      toggleDropdown,
      onClickRemoveBoard,
      onClickRemoveContentBoard,
    } = this;
    const { handleRemoveBoard, handleRemoveAllCards } = this.props;
    const {
      removingBoard,
      removingContentBoard,
      dialogOpen,
    } = this.state;
    const { cardDropdownOpen } = this.state;
    return (
      <ClickOutsideWrapper handleClickOutside={this.turnOffDropdown}>
        <div>
          <div className="card-actionBtn action-btn">
            <button
              type="submit"
              onClick={this.toggleDropdown}
              ref={node => (this.node = node)}
            >
              <img src={DotsSvg} alt="dots" />
            </button>
          </div>
          <BoardDropdown
            isOpened={cardDropdownOpen}
            toggleDropdownMenu={toggleDropdown}
            handleRemoveBoard={onClickRemoveBoard}
            handleRemoveContentBoard={onClickRemoveContentBoard}
          />
        </div>
        <Modal>
          <div className="modal-wrapper">
            {removingBoard && (
              <ConfirmModal
                dialogOpen={dialogOpen}
                turnOffConfirmModal={turnOffConfirmModal}
                handleAction={handleRemoveBoard}
                modalQuestion={'Are you sure to delete this board?'}
              />
            )}
            {removingContentBoard && (
              <ConfirmModal
                dialogOpen={dialogOpen}
                turnOffConfirmModal={turnOffConfirmModal}
                handleAction={handleRemoveAllCards}
                modalQuestion={'Are you sure to delete all cards?'}
              />
            )}
          </div>
        </Modal>
      </ClickOutsideWrapper>
    );
  }
}

export default BoardAction;
