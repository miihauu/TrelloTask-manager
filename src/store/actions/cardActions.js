import {
  ADD_CARD,
  DELETE_CARD,
  MOVE_CARD,
  EDIT_CARD_CONTENT,
  CHANGE_PRIORITY,
  EDIT_DUE_DATE,
} from './actionTypes';

export const addCard = (boardId, cardId, content) => {
  return {
    type: ADD_CARD,
    boardId,
    cardId,
    content,
  };
};

export const deleteCard = (cardId, boardId) => {
  return {
    type: DELETE_CARD,
    deletedId: cardId,
    boardId,
    cardId,
  };
};

export const editContentCard = (cardId, newContentValue) => {
  return {
    type: EDIT_CARD_CONTENT,
    cardId,
    newContentValue,
  };
};

export const moveCard = (
  oldCardIndex,
  newCardIndex,
  sourceListId,
  destinationListId,
) => {
  return {
    type: MOVE_CARD,
    oldCardIndex,
    newCardIndex,
    sourceListId,
    destinationListId,
  };
};

export const changePriority = (cardId, newCardPriority) => {
  return {
    type: CHANGE_PRIORITY,
    cardId,
    newCardPriority,
  };
};

export const editDueDate = (cardId, dueDate) => {
  return {
    type: EDIT_DUE_DATE,
    cardId,
    dueDate,
  };
};
