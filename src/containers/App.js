import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { moveCard } from '../store/actions/cardActions';
import { addBoard, moveBoard } from '../store/actions/boardActions';
import Header from '../components/Header/Header';
import Board from '../components/Board/Board';
import NewBoardButton from '../components/Buttons/NewBoardButton/NewBoardButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDragEnd = ({ source, destination, type }) => {
    const { moveBoard, moveCard } = this.props;
    if (!destination) {
      return;
    }

    if (type === 'COLUMN') {
      if (source.index !== destination.index) {
        moveBoard(source.index, destination.index);
      }
      return;
    }
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      moveCard(
        source.index,
        destination.index,
        source.droppableId,
        destination.droppableId,
      );
    }
  };

  render() {
    const { addNewBoard, boards } = this.props;

    return (
      <div className="app">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-boards"
            type="COLUMN"
            direction="horizontal"
          >
            {provided => (
              <div className="content" ref={provided.innerRef}>
                {boards.map((board, index) => {
                  return (
                    <Board
                      {...provided.droppableProps}
                      boardId={board}
                      key={board}
                      index={index}
                    />
                  );
                })}

                <div className="newboard-btn">
                  <NewBoardButton addNewBoard={addNewBoard} />
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.projects.project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewBoard: boardId => dispatch(addBoard(boardId)),
    moveBoard: (oldBoardIndex, newBoardIndex) =>
      dispatch(moveBoard(oldBoardIndex, newBoardIndex)),
    moveCard: (
      oldCardIndex,
      newBoardIndex,
      sourceListId,
      destinationListId,
    ) =>
      dispatch(
        moveCard(
          oldCardIndex,
          newBoardIndex,
          sourceListId,
          destinationListId,
        ),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
