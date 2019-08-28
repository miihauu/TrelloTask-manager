import React from 'react';
import shortid from 'shortid';
import ClickOutsideWrapper from '../../ClickOutsideWrapper/ClickOutsideWrapper';

class NewCardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEnabled: false,
      inputValue: '',
    };
  }

  handleInput = () => {
    this.setState({
      inputEnabled: true,
    });
  };

  handleCloseEditingCard = () => {
    this.setState({
      inputEnabled: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const cardId = shortid.generate();
    if (this.state.inputValue) {
      this.props.handleAddCard(cardId, this.state.inputValue);
      this.setState({
        inputValue: '',
      });
    }
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputEnabled, inputValue } = this.state;
    return (
      <ClickOutsideWrapper
        handleClickOutside={this.handleCloseEditingCard}
      >
        <form
          className="newcard__input"
          onClick={this.handleInput}
          onSubmit={this.handleSubmit}
        >
          {inputEnabled ? (
            <input
              placeholder="Type your text"
              onChange={this.handleChange}
              value={inputValue}
            />
          ) : (
            '+  Click to add new card'
          )}
        </form>
      </ClickOutsideWrapper>
    );
  }
}

export default NewCardInput;
