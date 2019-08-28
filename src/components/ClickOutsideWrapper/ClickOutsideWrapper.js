import React from 'react';
import onClickOutside from 'react-onclickoutside';

class ClickOutsideWrapper extends React.Component {
  handleClickOutisde = () => this.props.handleClickOutisde();
  render = () => this.props.children;
}

export default onClickOutside(ClickOutsideWrapper);
