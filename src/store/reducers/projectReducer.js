const projectReducer = (
  state = {
    project: [],
  },
  action,
) => {
  const { boardId, deletedBoardId } = action;

  switch (action.type) {
    case 'ADD_BOARD':
      return {
        project: [...state.project, boardId],
      };
    case 'REMOVE_BOARD':
      return {
        ...state,
        project: state.project.filter(
          boardId => boardId !== deletedBoardId,
        ),
      };
    case 'MOVE_BOARD':
      const { oldBoardIndex, newBoardIndex } = action;
      const newBoards = Array.from(state.project);
      const [removedBoard] = newBoards.splice(oldBoardIndex, 1);
      newBoards.splice(newBoardIndex, 0, removedBoard);
      return {
        ...state,
        project: newBoards,
      };
    default:
      return state;
  }
};

export default projectReducer;
