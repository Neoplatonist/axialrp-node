import React, { Component } from 'react';
import { AbilityMap, Dice, Option, isEmpty } from './utils';
import './styles.css';

// Mock Database
import { 
  alignmentDB, 
  classDB, 
  raceDB,
  subracesDB,
  skillsDB
} from '../db.js';

import AbilityWithMod from './components/abilityMod';
import Armor from './components/armor';
import Class from './components/class';
import Description from './components/description';
import Race from './components/race';
import SavingThrows from './components/savingThrows';
import Skills from './components/skills';
import Stats from './components/stats';
import Weapons from './components/weapons';

import { connect } from 'react-redux';
import {
  selectAbility,
  selectAbilityMod,
  selectAlignment,
  setAlignment,
  selectDice,
  setDice,
  setHP,
  setLanguage,
  selectLanguage,
  selectLanguageList,
  setLevel,
  selectLevel,
  selectRace,
  selectRaceObj,
  setSkills,
  selectSpeed,
  selectSubRace,
  selectSavingThrows,
  selectSkills,
  selectSkillsFilter
} from '../../actions';

class Generator extends Component {
  componentDidMount() {
    this.rollDice();
  }

  rollDice = e => {
    const dice = Dice(20, 6);
    this.props.setDice(dice);
  }

  handleAlignment = () => {
    return alignmentDB.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  handleLevel = e => {
    this.props.setAlignment(parseInt(e.target.value, 10));
  }

  handleSkillReset = e => {
    this.props.setSkills([]);
  }

  renderLanguages = () => {
    this.renderLanguageOptions();
    return this.props.languageList.map((v, k) => {
      return <li key={k}>{v}</li>;
    });
  }

  renderLO = () => {
    return this.props.raceObj.languages.options.from.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  renderLanguageOptions = () => {
    if (!isEmpty(this.props.raceObj.languages.options)) {
      return <div>
        <select 
          name="lang" 
          className="input"
          onChange={ e => this.props.setLanguage(e.target.value)}
          value={this.props.language} 
        >
          { 'Choose: ' + JSON.stringify(this.props.raceObj.languages.options.choose) }
          { this.renderLO() }
        </select>
      </div>
    }
  }

  renderSkills = e => {
    return this.props.skillsFilter.from.map((v, k) => {
      const skill = skillsDB.find(j => j.name === v.name);
      return <Skills 
        key={k} 
        desc={skill.desc}
        name={v.name} 
        mod={skill.ability_score.name} 
        checked={''}/>;
    });
  }

  savingThrows() {
    return AbilityMap.map((v, k) => {
      return <SavingThrows key={k} label={v} mod={this.props.savingThrows[k]} />
    });
  }

  render() {
    // console.log('render', { state: this.state, subraces });
    // console.log({ ...this.props });

    return (
      <main>
        <h2>Character Generator</h2>

        <form onSubmit={ e => e.preventDefault() }>
          <Description />

          <br/>

          <label htmlFor="lang">Languages: </label>
          { this.renderLanguageOptions() }
          <ul>
            { this.renderLanguages() }
          </ul>

          <br/>

          <Race raceDB={raceDB} subracesDB={subracesDB}/>

          <br/>

          <Class classDB={classDB} />

          <br/>


          <label htmlFor="level">Level: </label>
          <input 
            name="level" 
            className="input" 
            type="text"
            onChange={ e => 
              this.props.setLevel(parseInt(e.target.value, 10))}
            value={this.props.level} />

          <label htmlFor="alignment">Alignment: </label>
          <select 
            name="alignment"
            className="input"
            onChange={ e => this.props.setAlignment(e.target.value) }
            value={this.props.alignment}
          >
            { this.handleAlignment() }
          </select>

          <br/><br/>

          <h3>Ability Scores</h3>

          <button onClick={this.rollDice}>ReRoll?</button>

          <AbilityWithMod />

          <br/><br/>

          <Stats />

          <br/><br/>

          <h3>Saving Throws</h3>

          <br/>
          
          <ul>
            { this.savingThrows() }
          </ul>

          <br/><br/>

          <h3>Skills</h3>
          <h5>Choose {this.props.skillsFilter.choose}</h5>
          <button onClick={this.handleSkillReset} >Reset</button>
          <br/>

          { this.renderSkills() }

          <br/>

          <Armor />

          <br/>

          <Weapons />
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ability: selectAbility(state),
  abilityMod: selectAbilityMod(state),
  alignment: selectAlignment(state),
  dice: selectDice(state),
  language: selectLanguage(state),
  languageList: selectLanguageList(state),
  level: selectLevel(state),
  race: selectRace(state),
  raceObj: selectRaceObj(state),
  skills: selectSkills(state),
  skillsFilter: selectSkillsFilter(state),
  speed: selectSpeed(state),
  savingThrows: selectSavingThrows(state),
  subrace: selectSubRace(state)
});

const boundActions = {
  setAlignment,
  setDice,
  setHP,
  setLanguage,
  setLevel,
  setSkills
};

export default connect(mapStateToProps, boundActions)(Generator);

// FIXME: Switching armor list between proficiency and all allows multiple of same type.
// FIXME: RaceDB Normalization