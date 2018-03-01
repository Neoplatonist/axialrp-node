import React, { Component } from 'react';
import { isEmpty, Option } from '../../utils';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  setAlignment,
  selectRace,
  setRace,
  setSpeed,
  selectRaceObj,
  selectSubRace,
  setSubRace
} from '../../../../actions';

class Race extends Component {
  handleRace = e => {
    return this.props.raceDB.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  handleSubRace = e => {
    const subraces = this.props.raceObj.sub_races || {};
    console.log(subraces)
    return subraces.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  onRaceChange = e => {
    // TODO: Doesn't update on first loop
    const r = this.props.raceDB.find(v => v.name === e.target.value);
    this.props.setRace(e.target.value);
    isEmpty(r.sub_races) ? 
      this.props.setSubRace('') :
      this.props.setSubRace(r.sub_races[0].name);
  }

  onSubRaceChange = e => {
    this.props.setSubRace(e.target.value);
  }

  renderSubRace = () => {
    return this.props.subrace ?
      (
        <select
          name="sub-races"
          className="input"
          onChange={this.onSubRaceChange}
          value={this.props.subrace}
        >
          { this.handleSubRace() }
        </select>
      ) :
      'None';
  }

  render() {
    return (
      <div>
        <label htmlFor="races">Race: </label>
        <select
          name="races"
          className="input"
          onChange={this.onRaceChange}
          value={this.props.race}
        >
          { this.handleRace() }
        </select>

        <br/>

        <label htmlFor="sub-races">Sub-Race: </label>
        { this.renderSubRace() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  race: selectRace(state),
  raceObj: selectRaceObj(state),
  subrace: selectSubRace(state),
});

const boundActions = {
  setAlignment,
  setRace,
  setSpeed,
  setSubRace
};

export default connect(mapStateToProps, boundActions)(Race);