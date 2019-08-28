const cardReducer = (state = {}, action) => {
  const { cardId, boardId, content, cards } = action;

  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        [cardId]: {
          id: cardId,
          content,
          boardId,
          priority: 'medium',
        },
      };
    case 'DELETE_CARD':
      const { [cardId]: deletedId, ...restOfCards } = state;
      return restOfCards;
    case 'REMOVE_BOARD':
    case 'REMOVE_ALL_CARDS':
      return Object.keys(state)
        .filter(cardId => !cards.includes(cardId))
        .reduce(
          (newState, cardId) => ({
            ...newState,
            [cardId]: state[cardId],
          }),
          {},
        );
    case 'EDIT_CARD_CONTENT':
      const { newContentValue } = action;
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          content: newContentValue,
        },
      };
    case 'CHANGE_PRIORITY':
      const { newCardPriority } = action;
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          priority: newCardPriority,
        },
      };
    case 'EDIT_DUE_DATE':
      const { dueDate } = action;
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          dueDate,
        },
      };

    default:
      return state;
  }
};

export default cardReducer;
