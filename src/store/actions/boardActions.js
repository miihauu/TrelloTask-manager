import {
  ADD_BOARD,
  EDIT_BOARD_TITLE,
  REMOVE_BOARD,
  REMOVE_ALL_CARDS,
  MOVE_BOARD,
} from './actionTypes';

export const addBoard = boardId => {
  return {
    type: ADD_BOARD,
    boardId,
  };
};

export const editBoardTitle = (boardId, newTitle) => {
  return {
    type: EDIT_BOARD_TITLE,
    boardId,
    newTitle,
  };
};

export const removeBoard = (boardId, cards) => {
  return {
    type: REMOVE_BOARD,
    boardId,
    deletedBoardId: boardId,
    cards,
  };
};

export const removeAllCards = (boardId, cards) => {
  return {
    type: REMOVE_ALL_CARDS,
    boardId,
    cards,
    deletedCards: cards,
  };
};

export const moveBoard = (oldBoardIndex, newBoardIndex) => {
  return {
    type: MOVE_BOARD,
    oldBoardIndex,
    newBoardIndex,
  };
};
