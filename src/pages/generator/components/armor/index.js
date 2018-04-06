import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Option } from '../../utils';
import ArmorList from './armorList';

import { connect } from 'react-redux';
import {
  addArmor,
  selectArmor,
  selectArmorActive,
  setArmorActive,
  setArmorAll,
  selectArmorProficiency
} from '../../../../actions';

class Armor extends Component {
  componentWillMount() {
    this.props.setArmorAll();
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.armorProf).className = 'tab-item tab-active';
  }

  armorList = () => {
    return this.props.armor.map((v, k) => {
      return <ArmorList key={k} desc={v} />;
    });
  }

  handleArmor = () => {
    if (this.props.armorActive === 'proficiency') {
      const armorProficiency = [{name: '---'}, ...this.props.armorProficiency];
      return armorProficiency.map((v, k) => {
        return <Option key={k} {...v} />;
      });
    } else {
      const armorProficiency = [{name: '---'}, ...this.state.armorAll];
      return armorProficiency.map((v, k) => {
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
          onChange={this.props.addArmor}
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
  armorAll: state.generator.armorAll,
  armorProficiency: selectArmorProficiency(state)
});

const boundActions = {
  addArmor,
  setArmorActive,
  setArmorAll
};

export default connect(mapStateToProps, boundActions)(Armor);