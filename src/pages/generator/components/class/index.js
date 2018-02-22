import React, { Component } from 'react';
import { Option } from '../../utils';
import '../../styles.css';

import { connect } from 'react-redux';
import { 
  selectAbilityMod, 
  selectClass, 
  setClass,
  setHP 
} from '../../../../actions';

class Class extends Component {
  handleClass = e => {
    return this.props.classDB.map((v, k) => {
      return <Option key={k} {...v} />;
    })
  }

  onClassChange = e => {
    this.props.setClass(e.target.value);
    const hit_die = this.props.classDB
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
  class: selectClass(state),
  abilityMod: selectAbilityMod(state)
});

const boundActions = {
  setClass,
  setHP
};

export default connect(mapStateToProps, boundActions)(Class);