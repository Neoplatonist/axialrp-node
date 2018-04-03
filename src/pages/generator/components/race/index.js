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
  setSubRace,
  selectSubRaceObj,
  setSubRaceObj
} from '../../../../actions';

// // Mock Database
// import { 
//   raceDB,
//   subracesDB
// } from '../../../db.js';

// graphQL Queries
import {
  raceQuery,
  raceNameQuery,
  sub_raceNameQuery
} from '../../../../db';

class Race extends Component {
  state = {
    race: [{name: ''}]
  };

  componentDidMount() {
    this.getRace()
  }

  getRace = async () => {
    const race = await raceQuery();
    this.setState({ race: race });
  }

  handleRace = e => {
    return this.state.race.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  handleSubRace = e => {
    const subraces = this.props.raceObj.sub_races || [];
    return subraces.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  onRaceChange = async e => {
    // TODO: Doesn't update on first loop
    // const r = raceDB.find(v => v.name === e.target.value);
    this.props.setRace(e.target.value);

    let r;
    try {
      r = await raceNameQuery(e.target.value);

      if (isEmpty(r.sub_races)) {
        this.props.setSubRace('')
      } else {
        this.props.setSubRace(r.sub_races[0].name);
  
        let subrace;
        try {
          subrace = await sub_raceNameQuery(r.sub_races[0].name);
          this.props.setSubRaceObj(subrace);
        } catch (err) {
          console.warn(err)
          this.props.setSubRaceObj({});
        }
      }
    } catch (err) {
      console.warn(err)
    } 
  }

  onSubRaceChange = async e => {
    this.props.setSubRace(e.target.value);

    let subrace;
    try {
      subrace = await sub_raceNameQuery(e.target.value);
      this.props.setSubRaceObj(subrace);
    } catch (err) {
      console.warn(err)
      subrace = [];
    }
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
  subraceObj: selectSubRaceObj(state)
});

const boundActions = {
  setAlignment,
  setRace,
  setSpeed,
  setSubRace,
  setSubRaceObj
};

export default connect(mapStateToProps, boundActions)(Race);