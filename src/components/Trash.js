import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TrashIcon from '../trash.svg';


class Trash extends Component {
  static propTypes = {
    trashVisibility: PropTypes.bool
  }

  render() {
    let icon = false;
    if (this.props.trashVisibility) {
      icon = <img src={ TrashIcon } alt="Trash" className="trash"></img>
    }

    return (
      <div className="bin">
        {icon}
      </div>
    );
  }
}

export default Trash;
