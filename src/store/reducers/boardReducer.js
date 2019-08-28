const boardReducer = (state = {}, action) => {
  const { boardId, cardId, deletedId, newTitle } = action;
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        ...state,
        [boardId]: {
          id: boardId,
          cards: [],
          title: 'New board',
        },
      };

    case 'ADD_CARD':
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          cards: [...state[boardId].cards, cardId],
        },
      };
    case 'DELETE_CARD':
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          cards: state[boardId].cards.filter(
            cardId => cardId !== deletedId,
          ),
        },
      };
    case 'EDIT_BOARD_TITLE':
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          title: newTitle,
        },
      };
    case 'REMOVE_BOARD':
      const { [boardId]: deletedBoardId, ...restOfBoards } = state;
      return restOfBoards;

    case 'REMOVE_ALL_CARDS':
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          cards: [],
        },
      };
    case 'MOVE_CARD':
      const {
        oldCardIndex,
        newCardIndex,
        sourceListId,
        destinationListId,
      } = action;

      if (sourceListId === destinationListId) {
        const newCards = Array.from(state[sourceListId].cards);
        const [removedCard] = newCards.splice(oldCardIndex, 1);
        newCards.splice(newCardIndex, 0, removedCard);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], cards: newCards },
        };
      }
      const sourceCards = Array.from(state[sourceListId].cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(
        state[destinationListId].cards,
      );
      destinationCards.splice(newCardIndex, 0, removedCard);
      return {
        ...state,
        [sourceListId]: {
          ...state[sourceListId],
          cards: sourceCards,
        },
        [destinationListId]: {
          ...state[destinationListId],
          cards: destinationCards,
        },
      };

    default:
      return state;
  }
};

export default boardReducer;
