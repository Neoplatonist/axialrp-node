import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import { setClass, setHP } from '../../../../actions';

const Option = ({ name }) => <option value={name}>{name}</option>;

class Class extends Component {
  handleClass = e => {
    return this.props.mockClass.map((v, k) => {
      return <Option key={k} {...v} />;
    })
  }

  onClassChange = e => {
    this.props.setClass(e.target.value);
    const hit_die = this.props.mockClass
      .find( v => v.name === e.target.value).hit_die;

    // TODO: Constitution is for level 1 only.
    this.props.setHP(hit_die + this.props.abilityMod[2]);
    
    // this.updateFeatures();
    // this.updateSpells();
  }

  render() {
    return (
      <div>
        <label htmlFor="class">Class: </label>
        <select
          name="class"
          className="input"
          onChange={this.onClassChange}
          value={this.props.class}
        >
          { this.handleClass() }
        </select>

        {/* <label htmlFor="sub-class">SubClass: </label>
          <select 
            name="sub-class"
            className="input"
            onChange={this.onSubRaceChange}
            value={this.props.subrace}
          >
            { this.handleSubRace() }
          </select> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  class: state.generator.class,
  abilityMod: state.generator.abilityMod
});

const boundActions = {
  setClass,
  setHP
};

export default connect(mapStateToProps, boundActions)(Class);