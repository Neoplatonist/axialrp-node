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

// graphQL Queries
import {
  classQuery
} from '../../../../db';

class Class extends Component {
  state = {
    classes: []
  }

  componentDidMount() {
    this.getClasses()
  }

  getClasses = async () => {
    const classes = await classQuery();
    this.setState({ classes: classes });
  }

  handleClass = e => {
    return this.state.classes.map((v, k) => {
      return <Option key={k} {...v} />;
    })
  }

  onClassChange = e => {
    this.props.setClass(e.target.value);
    const hit_die = this.state.classes
      .find(v => v.name === e.target.value).hit_die;

    this.props.setHP(hit_die + this.props.abilityMod[2]);
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
          { this.state.classes.length 
            ? this.handleClass() 
            : <option value="">...Loading</option> }
        </select>
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