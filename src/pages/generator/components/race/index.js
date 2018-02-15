import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  setAlignment,
  selectRace,
  setRace,
  setSpeed,
  selectSubRace,
  setSubRace
} from '../../../../actions';

const Option = ({ name }) => <option value={name}>{name}</option>;

class Race extends Component {
  handleRace = e => {
    return this.props.mockRace.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  handleSubRace = e => {
    const subraces = this.props.mockRace
      .find(v => v.name === this.props.race)
      .sub_races || {sub_races: []};

    return subraces.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  onRaceChange = e => {
    // TODO: Doesn't update on first loop
    const r = this.props.mockRace.find(v => v.name === e.target.value);
    this.props.setRace(e.target.value);
    this.props.setSubRace(r.sub_races[0].name);

    // setTimeout(() => {
    //   this.props.setAlignment(r.alignment.main);
    //   this.props.setSpeed(r.speed.base);
    // });
  }

  onSubRaceChange = e => {
    this.props.setSubRace(e.target.value);
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
        <select
          name="sub-races"
          className="input"
          onChange={this.onSubRaceChange}
          value={this.props.subrace}
        >
          { this.handleSubRace() }
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  race: selectRace(state),
  subrace: selectSubRace(state),
});

const boundActions = {
  setAlignment,
  setRace,
  setSpeed,
  setSubRace
};

export default connect(mapStateToProps, boundActions)(Race);