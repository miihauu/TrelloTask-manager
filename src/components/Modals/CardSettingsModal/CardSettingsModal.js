import React from 'react';
import Backdrop from '../Backdrop';
import CardSettingsPriority from './CardSettingsPriority';
import CardSettingsSubmit from './CardSettingsSubmit';
import CardSettingsHeader from './CardSettingsHeader';
import CardSettingsDescription from './CardSettingsDescription';
import ClickOutsideWrapper from '../../ClickOutsideWrapper/ClickOutsideWrapper';
import { connect } from 'react-redux';
import {
  changePriority,
  editDueDate,
} from '../../../store/actions/cardActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CardSettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPriority: 'medium',
      cardDescription: 'Press enter to submit description',
      cardDescriptionOpen: false,
      dueDate: null,
    };
  }

  setPriorityToLow = () => {
    this.setState({
      cardPriority: 'low',
    });
  };

  setPriorityToMedium = () => {
    this.setState({
      cardPriority: 'medium',
    });
  };

  setPriorityToHigh = () => {
    this.setState({
      cardPriority: 'high',
    });
  };

  setCardDescriptionToOpen = () => {
    this.setState({
      cardDescriptionOpen: true,
    });
  };
  setCardDescriptionToClose = () => {
    this.setState({
      cardDescriptionOpen: false,
    });
  };

  handleSubmitCardDescription = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.setState({
        cardDescription: e.target.value,
      });
      this.setCardDescriptionToClose();
    }
  };

  handleSubmitPriority = () => {
    const { changePriority, cardId, editDueDate } = this.props;
    const { cardPriority, dueDate } = this.state;
    changePriority(cardId, cardPriority);
    if (dueDate) {
      editDueDate(
        cardId,
        dueDate.toLocaleDateString().replace(/\./g, '/'),
      );
    } else {
      editDueDate(cardId, '');
    }
  };

  handleChangeDate = date => {
    this.setState({
      dueDate: date,
    });
  };

  render() {
    const {
      setPriorityToLow,
      setPriorityToMedium,
      setPriorityToHigh,
      setCardDescriptionToOpen,
      handleSubmitCardDescription,
      setCardDescriptionToClose,
      handleSubmitPriority,
      handleChangeDate,
    } = this;
    const {
      cardPriority,
      cardDescriptionOpen,
      cardDescription,
      dueDate,
    } = this.state;

    const { setCardSettingsModalToClose, isOpened } = this.props;

    return (
      <>
        {isOpened && (
          <>
            <Backdrop />
            <ClickOutsideWrapper
              handleClickOutside={setCardSettingsModalToClose}
            >
              <div className="card-settings-modal">
                <CardSettingsHeader />
                <CardSettingsPriority
                  setPriorityToLow={setPriorityToLow}
                  setPriorityToMedium={setPriorityToMedium}
                  setPriorityToHigh={setPriorityToHigh}
                  cardPriority={cardPriority}
                />
                <ClickOutsideWrapper
                  handleClickOutside={setCardDescriptionToClose}
                >
                  <CardSettingsDescription
                    cardDescription={cardDescription}
                    cardDescriptionOpen={cardDescriptionOpen}
                    setCardDescriptionToOpen={
                      setCardDescriptionToOpen
                    }
                    handleSubmitCardDescription={
                      handleSubmitCardDescription
                    }
                  />
                </ClickOutsideWrapper>
                <div className="date-picker-wrapper">
                  <span>Pick a due date:</span>
                  <DatePicker
                    className="date-picker"
                    selected={dueDate}
                    onChange={handleChangeDate}
                    dateFormat="dd/MM/yyyy"
                    calendarClassName="date-picker-calendar"
                    placeholderText="Click to select a date"
                    isClearable={true}
                  />
                </div>
                <CardSettingsSubmit
                  handleSubmitPriority={handleSubmitPriority}
                  setCardSettingsModalToClose={
                    setCardSettingsModalToClose
                  }
                />
              </div>
            </ClickOutsideWrapper>
          </>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePriority: (cardId, newCardPriority) => {
      dispatch(changePriority(cardId, newCardPriority));
    },
    editDueDate: (cardId, dueDate) => {
      dispatch(editDueDate(cardId, dueDate));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CardSettingsModal);
