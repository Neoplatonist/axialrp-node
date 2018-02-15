import React, { Component } from 'react';
import { Dice } from './utils';
import './styles.css';

// Mock Database
import { 
  alignmentDB, 
  classDB, 
  raceDB,
  skillsDB
} from '../db.js';

import AbilityWithMod from './components/abilityMod';
import Class from './components/class';
import Description from './components/description';
import Race from './components/race';
import SavingThrows from './components/savingThrows';
import Skills from './components/skills';
import Stats from './components/stats';

import { connect } from 'react-redux';
import {
  selectAbility,
  // setAbility,
  selectAbilityMod,
  // setAbilityMod,
  setAlignment,
  selectDice,
  setDice,
  setHP,
  selectRace,
  selectSubRace
} from '../../actions';

const Option = ({ name }) => <option value={name}>{name}</option>;

class Generator extends Component {
  componentDidMount() {
    this.rollDice();

    // const align = raceDB.find( e => e.name === this.props.race ).alignment.main;
    // this.props.setAlignment(align);
  }

  rollDice = e => {
    const dice = Dice(20, 6);
    this.props.setDice(dice);
  }

  handleAlignment = e => {
    return alignmentDB.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  renderSkills() {
    return skillsDB.map((v, k) => {
      return <Skills key={k} skill={v} />;
    });
  }

  // updateAbility = e => {
  //   const r = raceDB.find(v => v.name === this.props.race);
  //   const sr = r.sub_races.find(v => v.name === this.props.subrace);
  //   const ability = abilityMap.reduce((o, k, i) => (
  //     {
  //       ...o,
  //       [k]: this.props.dice[i] + r.ability_bonus[i] + sr.ability_bonus[i],
  //     }), {}
  //   );

  //   this.props.setAbility(ability);
  // }

  render() {
    // console.log('render', { state: this.state, subraces });
    // console.log({ ...this.props });

    return (
      <main>
        <h2>Character Generator</h2>

        <form onSubmit={ e => e.preventDefault() }>
          <Description />

          <br/>

          <Race mockRace={raceDB} />

          <br/>

          <Class mockClass={classDB} />

          <br/>


          <label htmlFor="level">Level: </label>
          <input name="level" className="input" type="text" />

          <label htmlFor="alignment">Alignment: </label>
          <select 
            name="alignment"
            className="input"
            onChange={ e => this.props.setAlignment }
            value={this.props.alignment}
          >
            { this.handleAlignment() }
          </select>

          <br/><br/>

          <h3>Ability Scores</h3>

          <button onClick={this.rollDice}>ReRoll?</button>

          <AbilityWithMod mockClass={classDB}/>

          <br/><br/>

          <Stats />

          <br/><br/>

          <SavingThrows saves={this.props.savingThrows} />

          <br/><br/>

          <h3>Skills</h3>

          <br/>

          { this.renderSkills() }
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ability: selectAbility(state),
  abilityMod: selectAbilityMod(state),
  alignment: state.generator.alignment,
  class: state.generator.class,
  dice: selectDice(state),
  race: selectRace(state),
  speed: state.generator.speed,
  savingThrows: state.generator.savingThrows,
  subrace: selectSubRace(state)
});

const boundActions = {
  // setAbility,
  // setAbilityMod,
  setAlignment,
  setDice,
  setHP
};

export default connect(mapStateToProps, boundActions)(Generator);