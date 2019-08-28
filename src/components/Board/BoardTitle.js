import React from 'react';
import BoardAction from '../Buttons/BoardAction/BoardAction';
import ClickOutsideWrapper from '../ClickOutsideWrapper/ClickOutsideWrapper';

class BoardTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEditable: false,
      newTitleValue: '',
    };
  }

  handleEditTitle = () => {
    this.setState({
      titleEditable: true,
    });
  };

  handleChangeTitle = e => {
    this.setState({
      newTitleValue: e.target.value,
    });
  };

  handleCloseEditingTitle = () => {
    this.setState({
      titleEditable: false,
    });
  };

  handleSubmitTitle = () => {
    this.props.handleEditBoardTitle(this.state.newTitleValue);
    this.handleCloseEditingTitle();
  };

  render() {
    const {
      title,
      handleRemoveBoard,
      handleRemoveAllCards,
    } = this.props;
    const { titleEditable, newTitleValue } = this.state;
    return (
      <ClickOutsideWrapper
        handleClickOutside={this.handleCloseEditingTitle}
      >
        <div className="board__header">
          <div
            className="board__title"
            onClick={this.handleEditTitle}
          >
            {titleEditable ? (
              <form onSubmit={this.handleSubmitTitle}>
                <input
                  placeholder={title}
                  onChange={this.handleChangeTitle}
                  value={newTitleValue}
                />
              </form>
            ) : (
              <span>{title}</span>
            )}
          </div>
          <div>
            <BoardAction
              handleRemoveBoard={handleRemoveBoard}
              handleRemoveAllCards={handleRemoveAllCards}
            />
          </div>
        </div>
      </ClickOutsideWrapper>
    );
  }
}

export default BoardTitle;
