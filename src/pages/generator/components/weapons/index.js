import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Option } from '../../utils';
import WeaponList from './weaponList';

import { connect } from 'react-redux';
import {
  selectWeapon,
  setWeapon,
  selectWeaponProficiency,
  selectWeaponActive,
  setWeaponActive
} from '../../../../actions';

import { 
  weaponDB
} from '../../../db.js';

class Weapon extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.weaponProf).className = 'tab-item tab-active';
  }

  addWeapon = e => {
    const list = [...this.props.weapon].filter(v => v !== e.target.value);
    this.props.setWeapon([...list, e.target.value]);
  }

  weaponList = () => {
    return this.props.weapon.map((v, k) => {
      const list = weaponDB.find( j => j.name === v);
      return <WeaponList key={k} desc={list} />
    });
  }

  handleWeapon = () => {
    if (this.props.weaponActive === 'proficiency') {
      const weaponProf = [{}, ...this.props.weaponProficiency];
      return weaponProf.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      const weaponProf = [{}, ...weaponDB];
      return weaponProf.map((v, k) => {
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
          onChange={this.addWeapon}
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
  weaponProficiency: selectWeaponProficiency(state)
});

const boundActions = {
  setWeapon,
  setWeaponActive
};

export default connect(mapStateToProps, boundActions)(Weapon);