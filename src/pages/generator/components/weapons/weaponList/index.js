import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../styles.css';

import { connect } from 'react-redux';
import {
  selectWeapon,
  setWeapon
} from '../../../../../actions';

class WeaponList extends Component {
  state = {
    showDesc: false
  }

  deleteItem = (name, e) => {
    this.props.setWeapon(this.props.weapon.filter(v => v !== name));
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.weaponDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    return (
      <li className="input weaponContainer"> 
        <div className="weapon-text"> { this.props.desc.name }</div>
        <span className="weapon-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

        <span onClick={this.deleteItem.bind(this, this.props.desc.name)}><i className="fas fa-times"></i></span>
        

        <div 
          ref={ el => this.weaponDesc = el } 
          className="weaponDesc"
        >
          {/* will add more info in future */}
          { this.props.desc.weight }
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  weapon: selectWeapon(state)
});

const boundActions = {
  setWeapon
};

export default connect(mapStateToProps, boundActions)(WeaponList);