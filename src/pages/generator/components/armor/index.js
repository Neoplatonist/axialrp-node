import React, { Component } from 'react';
import { Option } from '../../utils';
import ArmorList from './armorList';

import { connect } from 'react-redux';
import {
  selectArmor,
  setArmor
} from '../../../../actions';

class Armor extends Component {
  addArmor = e => {
    const armor = [...this.props.armor, e.target.value];
    this.props.setArmor(armor);
  }

  armorList = () => {
    return this.props.armor.map((v, k) => {
      const list = this.props.armorDB.find( j => j.name === v);
      return <ArmorList key={k} desc={list} />
    });
  }

  handleArmor = () => {
    return this.props.armorDB.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  render() {
    return(
      <div>
        <label htmlFor="armor">Select Armor: </label>

        <button>Proficiency</button>
        <button>All</button>

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
  armor: selectArmor(state)
});

const boundActions = {
  setArmor
};

export default connect(mapStateToProps, boundActions)(Armor);