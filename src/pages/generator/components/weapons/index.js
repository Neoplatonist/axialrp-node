import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Option } from '../../utils';
import WeaponList from './weaponList';

import { connect } from 'react-redux';
import {
  addWeapon,
  selectWeapon,
  selectWeaponActive,
  setWeaponActive,
  setWeaponAll,
  selectWeaponProficiency
} from '../../../../actions';

class Weapon extends Component {
  componentWillMount() {
    this.props.setWeaponAll();
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.weaponProf).className = 'tab-item tab-active';
  }

  weaponList = () => {
    return this.props.weapon.map((v, k) => {
      return <WeaponList key={k} desc={v} />;
    });
  }

  handleWeapon = () => {
    if (this.props.weaponActive === 'proficiency') {
      return [{}, ...this.props.weaponProficiency.data].map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      return [{}, ...this.props.weaponAll.data].map((v, k) => {
        return <Option key={k} {...v} />;
      });
    }
  }

  selectAll = e => {
    ReactDOM.findDOMNode(this.weaponProf).className = 'tab-item';
    ReactDOM.findDOMNode(this.weaponAll).className = 'tab-item tab-active';
    this.props.setWeaponActive('all');
  }

  selectProficiency = e => {
    ReactDOM.findDOMNode(this.weaponProf).className = 'tab-item tab-active';
    ReactDOM.findDOMNode(this.weaponAll).className = 'tab-item';
    this.props.setWeaponActive('proficiency');
  }

  render() {
    return(
      <div>
        <label htmlFor="weapon">Select Weapon: </label>

        <ul className="tabs">
          <li 
            ref={el => this.weaponProf = el}
            className="tab-item" 
            onClick={this.selectProficiency}>
            <span className="tab-link">Proficiency</span>
          </li>
          <li 
            ref={el => this.weaponAll = el}
            className="tab-item" 
            onClick={this.selectAll}>
            <span className="tab-link">All</span>
          </li>
        </ul>

        <select 
          name="weapon"
          className="input"
          onChange={this.props.addWeapon}
          value=""
        >
          { this.handleWeapon() }
        </select>

        <ul>
          { this.weaponList() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weapon: selectWeapon(state),
  weaponActive: selectWeaponActive(state),
  weaponAll: state.generator.weaponAll,
  weaponProficiency: selectWeaponProficiency(state)
});

const boundActions = {
  addWeapon,
  setWeaponActive,
  setWeaponAll
};

export default connect(mapStateToProps, boundActions)(Weapon);