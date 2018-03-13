import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    ReactDOM.findDOMNode(this.armorProf).className = 'tab-item tab-active';
  }

  addArmor = e => {
    const list = [...this.props.armor].filter(v => v !== e.target.value);
    this.props.setArmor([...list, e.target.value]);
  }

  armorList = () => {
    return this.props.armor.map((v, k) => {
      const list = armorDB.find( j => j.name === v);
      return <ArmorList key={k} desc={list} />
    });
  }

  handleArmor = () => {
    if (this.props.armorActive === 'proficiency') {
      const armorProf = [{name: '---'}, ...this.props.armorProficiency];
      return armorProf.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      const armorProf = [{name: '---'}, ...armorDB];
      return armorProf.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    }
  }

  selectAll = e => {
    ReactDOM.findDOMNode(this.armorProf).className = 'tab-item';
    ReactDOM.findDOMNode(this.armorAll).className = 'tab-item tab-active';
    this.props.setArmorActive('all');
  }

  selectProficiency = e => {
    ReactDOM.findDOMNode(this.armorProf).className = 'tab-item tab-active';
    ReactDOM.findDOMNode(this.armorAll).className = 'tab-item';
    this.props.setArmorActive('proficiency');
  }

  render() {
    return(
      <div>
        <label htmlFor="armor">Select Armor: </label>

        <ul className="tabs">
          <li 
            ref={el => this.armorProf = el}
            className="tab-item" 
            onClick={this.selectProficiency}>
            <span className="tab-link">Proficiency</span>
          </li>
          <li 
            ref={el => this.armorAll = el}
            className="tab-item" 
            onClick={this.selectAll}>
            <span className="tab-link">All</span>
          </li>
        </ul>

        <select 
          name="armor"
          className="input"
          onChange={this.addArmor}
          value=""
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