import React, { Component } from 'react';
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
    document.getElementsByClassName('tab-item')[2].className += ' tab-active';
  }

  addWeapon = e => {
    const weapon = [...this.props.weapon, e.target.value];
    this.props.setWeapon(weapon);
  }

  weaponList = () => {
    return this.props.weapon.map((v, k) => {
      const list = weaponDB.find( j => j.name === v);
      return <WeaponList key={k} desc={list} />
    });
  }

  handleWeapon = () => {
    if (this.props.weaponActive === 'proficiency') {
      const weaponProf = [{name: '---'}, ...this.props.weaponProficiency];
      return weaponProf.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      const weaponProf = [{name: '---'}, ...weaponDB];
      return weaponProf.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    }
  }

  selectAll = e => {
    document.getElementsByClassName('tab-item')[2].className = 'tab-item';
    document.getElementsByClassName('tab-item')[3].className = 'tab-item tab-active';
    this.props.setWeaponActive('all');
  }

  selectProficiency = e => {
    document.getElementsByClassName('tab-item')[2].className = 'tab-item tab-active';
    document.getElementsByClassName('tab-item')[3].className = 'tab-item';
    this.props.setWeaponActive('proficiency');
  }

  render() {
    return(
      <div>
        <label htmlFor="weapon">Select Weapon: </label>

        <ul className="tabs">
          <li className="tab-item" onClick={this.selectProficiency}>
            <span className="tab-link">Proficiency</span>
          </li>
          <li className="tab-item" onClick={this.selectAll}>
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