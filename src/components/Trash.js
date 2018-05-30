import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import CatIcon from '../cat-sleep-icon.ico';
import CatButt from '../cat-upsidedown.ico';


class Trash extends Component {
  static propTypes = {
    trashVisibility: PropTypes.bool,
    catClicked: PropTypes.func.isRequired
  }

  onCatClickedHandler = () => {
    this.props.catClicked(this.props.trashVisibility);
  }

  render() {
    let icon = null;

    if (this.props.trashVisibility) {
      icon = <img src={ CatIcon } onClick={this.onCatClickedHandler} alt="Trash" className="trash"></img>
    } else {
      icon = <img src={ CatButt } onClick={this.onCatClickedHandler} alt="Trash" className="trash"></img>
    }

    return (
      <div className="bin">
        {icon}
      </div>
    );
  }
}

export default Trash;
