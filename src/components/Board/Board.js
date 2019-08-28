import { connect } from 'react-redux';
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { addCard, deleteCard } from '../../store/actions/cardActions';
import {
  editBoardTitle,
  removeBoard,
  removeAllCards,
} from '../../store/actions/boardActions';

import BoardContent from './BoardContent';
import BoardTitle from './BoardTitle';
import NewCard from './NewCard/NewCard';

const Board = ({
  addNewCard,
  boardId,
  cards,
  boardTitle,
  editBoardTitle,
  removeBoard,
  removeAllCards,
  index,
}) => {
  const handleAddCard = (cardId, content) => {
    addNewCard(boardId, cardId, content);
  };

  const handleRemoveAllCards = () => {
    removeAllCards(boardId, cards);
  };

  const handleEditBoardTitle = newTitle => {
    editBoardTitle(boardId, newTitle);
  };

  const handleRemoveBoard = () => {
    removeBoard(boardId, cards);
  };

  return (
    <Draggable draggableId={boardId} index={index}>
      {provided => (
        <div className="board-wrapper">
          <div
            className="board"
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <BoardTitle
              title={boardTitle}
              boardId={boardId}
              handleEditBoardTitle={handleEditBoardTitle}
              handleRemoveBoard={handleRemoveBoard}
              handleRemoveAllCards={handleRemoveAllCards}
            />
            <NewCard
              handleAddCard={handleAddCard}
              boardId={boardId}
            />
            <Droppable
              droppableId={boardId}
              type="card"
              direction="vertical"
            >
              {provided => (
                <BoardContent
                  {...provided.droppableProps}
                  cards={cards}
                  boardId={boardId}
                  innerRef={provided.innerRef}
                >
                  {provided.placeholder}
                </BoardContent>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.board[ownProps.boardId].cards,
    boardTitle: state.board[ownProps.boardId].title,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: (boardId, cardId, content) => {
      dispatch(addCard(boardId, cardId, content));
    },
    deleteCard: (cardId, boardId) => {
      dispatch(deleteCard(cardId, boardId));
    },
    editBoardTitle: (boardId, newTitle) => {
      dispatch(editBoardTitle(boardId, newTitle));
    },
    removeBoard: (boardId, cards) => {
      dispatch(removeBoard(boardId, cards));
    },
    removeAllCards: (boardId, cards) => {
      dispatch(removeAllCards(boardId, cards));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
