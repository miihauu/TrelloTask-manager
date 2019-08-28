import React from 'react';
import { connect } from 'react-redux';
import {
  deleteCard,
  editContentCard,
} from '../../store/actions/cardActions';
import { Draggable } from 'react-beautiful-dnd';
import BoardCardPriority from './BoardCardPriority';
import BoardCardContent from './BoardCardContent';
import BoardCardDate from './BoardCardDate';
import CardAction from '../Buttons/CardAction/CardAction';

class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContentEditable: false,
      newCardContentValue: '',
      cardSettingsModalOpen: false,
    };
  }
  styleCardPriority = () => {
    const { cardPriority } = this.props;
    if (cardPriority === 'low') {
      return 'card card__priority-low';
    } else if (cardPriority === 'medium') {
      return 'card card__priority-med';
    } else {
      return 'card card__priority-high';
    }
  };

  turnOnEditCard = () => {
    this.setState({
      cardContentEditable: true,
    });
  };

  turnOffEditCard = () => {
    this.setState({
      cardContentEditable: false,
    });
  };

  handleDeleteCard = () => {
    const { deleteOldCard, cardId, boardId } = this.props;
    deleteOldCard(cardId, boardId);
  };

  handleSubmitCardContent = () => {
    const { cardId, handleEditCard } = this.props;
    const { newCardContentValue } = this.state;
    if (newCardContentValue) {
      handleEditCard(cardId, newCardContentValue);
    }
    this.turnOffEditCard();
  };

  handleChangeCardContent = e => {
    this.setState({
      newCardContentValue: e.target.value,
    });
  };

  render() {
    const {
      cardContent,
      cardId,
      index,
      cardPriority,
      dueDate,
    } = this.props;
    const {
      handleDeleteCard,
      turnOnEditCard,
      turnOffEditCard,
      handleChangeCardContent,
      newCardContentValue,
      handleSubmitCardContent,
      styleCardPriority,
    } = this;
    const { cardContentEditable, cardSettingsModalOpen } = this.state;
    return (
      <div className="card-wrapper">
        <Draggable draggableId={cardId} index={index}>
          {provided => {
            return (
              <div
                className={styleCardPriority()}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
              >
                <BoardCardPriority cardPriority={cardPriority} />
                <CardAction
                  handleDeleteCard={handleDeleteCard}
                  cardId={cardId}
                  isModalSettingsOpen={cardSettingsModalOpen}
                />
                <BoardCardContent
                  cardContent={cardContent}
                  turnOnEditCard={turnOnEditCard}
                  cardContentEditable={cardContentEditable}
                  handleChangeCardContent={handleChangeCardContent}
                  handleSubmitCardContent={handleSubmitCardContent}
                  newCardContentValue={newCardContentValue}
                  turnOffEditCard={turnOffEditCard}
                />

                <BoardCardDate
                  cardPriority={cardPriority}
                  dueDate={dueDate}
                />
              </div>
            );
          }}
        </Draggable>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cardContent: state.cards[ownProps.cardId].content,
    cardPriority: state.cards[ownProps.cardId].priority,
    dueDate: state.cards[ownProps.cardId].dueDate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOldCard: (deletedId, boardId) => {
      dispatch(deleteCard(deletedId, boardId));
    },
    handleEditCard: (cardId, newCardContentValue) => {
      dispatch(editContentCard(cardId, newCardContentValue));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardCard);
