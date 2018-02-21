import React, { Component } from 'react';
import { Option } from '../../utils';
import ArmorList from './armorList';

import { connect } from 'react-redux';
import {
  selectArmor,
  setArmor,
  selectArmorProficiency,
  selectArmorActive,
  setArmorActive
} from '../../../../actions';

import { 
  armorDB
} from '../../../db.js';

class Armor extends Component {
  componentDidMount() {
    document.getElementsByClassName('tab-item')[0].className += ' tab-active';
  }

  addArmor = e => {
    const armor = [...this.props.armor, e.target.value];
    this.props.setArmor(armor);
  }

  armorList = () => {
    return this.props.armor.map((v, k) => {
      const list = armorDB.find( j => j.name === v);
      return <ArmorList key={k} desc={list} />
    });
  }

  handleArmor = () => {
    if (this.props.armorActive === 'proficiency') {
      return this.props.armorProficiency.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      return armorDB.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    }
  }

  selectAll = e => {
    document.getElementsByClassName('tab-item')[0].className = 'tab-item';
    document.getElementsByClassName('tab-item')[1].className = 'tab-item tab-active';
    this.props.setArmorActive('all');
  }

  selectProficiency = e => {
    document.getElementsByClassName('tab-item')[0].className = 'tab-item tab-active';
    document.getElementsByClassName('tab-item')[1].className = 'tab-item';
    this.props.setArmorActive('proficiency');
  }

  render() {
    return(
      <div>
        <label htmlFor="armor">Select Armor: </label>

        <ul className="tabs">
          <li className="tab-item" onClick={this.selectProficiency}>
            <span className="tab-link">Proficiency</span>
          </li>
          <li className="tab-item" onClick={this.selectAll}>
            <span className="tab-link">All</span>
          </li>
        </ul>

        <select 
          name="armor"
          className="input"
          onChange={this.addArmor}
          value="Padded"
        >
          { this.handleArmor() }
        </select>

        <ul>
          { this.armorList() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  armor: selectArmor(state),
  armorActive: selectArmorActive(state),
  armorProficiency: selectArmorProficiency(state)
});

const boundActions = {
  setArmor,
  setArmorActive
};

export default connect(mapStateToProps, boundActions)(Armor);