import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../styles.css';

import { connect } from 'react-redux';
import {
  removeArmor,
  selectArmor
} from '../../../../../actions';

class ArmorList extends Component {
  state = {
    showDesc: false
  }

  deleteItem = (name, e) => {
    this.props.removeArmor(name);
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.armorDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    return (
      <li className="input armorContainer"> 
        <div className="armor-text"> { this.props.desc.name }</div>
        <span className="armor-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

        <span onClick={this.deleteItem.bind(this, this.props.desc.name)}><i className="fas fa-times"></i></span>
        

        <div 
          ref={ el => this.armorDesc = el } 
          className="armorDesc"
        >
          {/* will add more info in future */}
          { this.props.desc.weight }
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  armor: selectArmor(state)
});

const boundActions = {
  removeArmor
};

export default connect(mapStateToProps, boundActions)(ArmorList);