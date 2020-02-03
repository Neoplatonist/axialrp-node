import React, { Component } from 'react';
import { Option } from '../../utils';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  setAlignment,
  selectRace,
  setRace,
  setSpeed,
  selectRaceNameList,
  setRaceNameList,
  selectRaceObj,
  selectSubRace,
  setSubRace,
  selectSubRaceObj
} from '../../../../actions';

class Race extends Component {
  componentWillMount() {
    this.props.setRaceNameList();
  }

  getSubRace = e => {
    const subraces = this.props.raceObj.data.subRaces || [{ name: '' }];
    return subraces.map((v, k) => {
      return <Option key={k} {...v || {}} />;
    });
  }

  onRaceChange = e => {
    this.props.setRace(e.target.value);
  }

  onSubRaceChange = e => {
    this.props.setSubRace(e.target.value);
  }

  renderRace = () => {
    return this.props.raceNameList.data.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  renderSubRaceSelect = () => {
    return this.props.subrace ?
      (
        <select
          name="sub-races"
          className="input"
          onChange={this.onSubRaceChange}
          value={this.props.subrace}
        >
          { this.props.raceNameList.data.length 
            ? this.getSubRace() 
            : <option value="">...Loading</option> }
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
          { this.props.raceNameList.data.length 
            ? this.renderRace() 
            : <option value="">...Loading</option> }
        </select>

        <br/>

        <label htmlFor="sub-races">Sub-Race: </label>
        { this.renderSubRaceSelect() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  race: selectRace(state),
  raceNameList: selectRaceNameList(state),
  raceObj: selectRaceObj(state),
  subrace: selectSubRace(state),
  subraceObj: selectSubRaceObj(state)
});

const boundActions = {
  setAlignment,
  setRace,
  setRaceNameList,
  setSpeed,
  setSubRace
};

export default connect(mapStateToProps, boundActions)(Race);