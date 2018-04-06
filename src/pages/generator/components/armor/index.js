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

// graphQL Queries
import { armorNameQuery, armorQuery } from '../../../../db';

class Armor extends Component {
  state = {
    lock: false,
    armor: [],
    armorAll: [],
    armorListName: [],
    armorProficiency: []
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.armorProf).className = 'tab-item tab-active';
    this.getArmor();
    this.getArmorAll();
    this.getArmorProf();
  }

  async shouldComponentUpdate(props, state) {
    const al = await props.armor;
    const ap = await props.armorProficiency;
    let bool = false;

    if (al !== state.armorListName) {
      this.getArmor();
      bool = true;
    }

    if (ap !== state.armorProficiency) {
      this.getArmorProf();
      bool = true;
    }

    return bool;
  }

  getArmor = async () => {
    const armor = await Promise.all(this.props.armor.map(async v => {
      const test = await armorNameQuery(v);
      return test;
    }));

    this.setState({ armorListName: this.props.armor });
    this.setState({ armor: armor });
  }

  getArmorAll = async () => {
    const armor = await armorQuery();
    this.setState({ armorAll: armor });
  }

  getArmorProf = async () => {
    this.setState({ armorProficiency: await this.props.armorProficiency });
  }

  addArmor = e => {
    const list = [...this.props.armor].filter(v => v !== e.target.value);
    this.props.setArmor([...list, e.target.value]);
    this.getArmor()
  }

  armorList = () => {
    return this.state.armor.map((v, k) => {
      return <ArmorList key={k} desc={v} />;
    });
  }

  handleArmor = () => {
    if (this.props.armorActive === 'proficiency') {
      const armorProficiency = [{name: '---'}, ...this.state.armorProficiency];
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