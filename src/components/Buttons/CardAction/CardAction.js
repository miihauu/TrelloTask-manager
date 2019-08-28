import React from 'react';
import DotsSvg from './dots.svg';
import CardDropdown from '../../CardDropdown/CardDropdown';
import ClickOutsideWrapper from '../../ClickOutsideWrapper/ClickOutsideWrapper';
import Modal from '../../Modals/Modal';
import CardSettingsModal from '../../Modals/CardSettingsModal/CardSettingsModal';

class CardAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDropdownOpen: false,
      cardSettingsModalOpen: false,
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

  setCardSettingsModalToOpen = () => {
    this.setState({
      cardSettingsModalOpen: true,
    });
  };

  setCardSettingsModalToClose = () => {
    this.setState({
      cardSettingsModalOpen: false,
    });
  };

  render() {
    const { cardDropdownOpen, cardSettingsModalOpen } = this.state;
    const {
      setCardSettingsModalToClose,
      setCardSettingsModalToOpen,
    } = this;
    const { cardId } = this.props;
    return (
      <>
        <ClickOutsideWrapper
          handleClickOutside={this.turnOffDropdown}
        >
          <div>
            <div className="card-actionBtn action-btn">
              <button type="submit" onClick={this.toggleDropdown}>
                <img src={DotsSvg} alt="dots" />
              </button>
            </div>
            <div>
              <CardDropdown
                isOpened={cardDropdownOpen}
                handleDeleteCard={this.props.handleDeleteCard}
                toggleDropdownMenu={this.toggleDropdown}
                setCardSettingsModalToOpen={
                  setCardSettingsModalToOpen
                }
              />
            </div>
          </div>
        </ClickOutsideWrapper>
        <Modal>
          <CardSettingsModal
            setCardSettingsModalToClose={setCardSettingsModalToClose}
            isOpened={cardSettingsModalOpen}
            cardId={cardId}
          />
        </Modal>
      </>
    );
  }
}

export default CardAction;
