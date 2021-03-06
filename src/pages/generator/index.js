import React, { Component } from 'react';
import { AbilityMap, Option } from './utils';
import './styles.css';

import AbilityList from './components/abilityList';
import Armor from './components/armor';
import Class from './components/class';
import Description from './components/description';
import LevelFeatures from './components/levelFeatures';
import Race from './components/race';
import SavingThrows from './components/savingThrows';
import Skills from './components/skills';
import Spells from './components/spells';
import Stats from './components/stats';
import Weapons from './components/weapons';

import { connect } from 'react-redux';
import {
  selectAlignment,
  setAlignment,
  setAlignmentAll,
  selectClass,
  setClass,
  selectClassObj,
  setLanguage,
  selectLanguage,
  selectLanguageList,
  setLevel,
  selectLevel,
  selectRace,
  selectRaceObj,
  setSkills,
  setSkillsAll,
  selectSubRace,
  selectSavingThrows,
  selectSkills,
  selectSkillsFilter,
  setSpellsAll,
  selectSpellsFilter
} from '../../actions';

class Generator extends Component {
  componentWillMount() {
    this.props.setAlignmentAll();
    this.props.setLevel(1);
    this.props.setSkillsAll();
    this.props.setSpellsAll();
    this.props.setClass('Cleric');
  }

  handleAlignment = () => {
    return this.props.alignmentAll.data.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  handleSkillReset = e => {
    this.props.setSkills([]);
  }

  renderLanguages = () => {
    this.renderLanguageOptions();
    return this.props.languageList.data.map((v, k) => {
      return <li key={k}>{v}</li>;
    });
  }

  renderLO = () => {
    return this.props.raceObj.data.languages.options.from.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  renderLanguageOptions = () => {
    try {
      if (this.props.raceObj.data.languages.options.choose) {
        return (
          <div>
            <select
              name="lang"
              className="input"
              onChange={ e => this.props.setLanguage(e.target.value)}
              value={this.props.language}
            >
              { 'Choose: ' + JSON.stringify(this.props.raceObj.data.languages.options.choose) }
              { this.renderLO() }
            </select>
          </div>
        )
      }
    } catch (err) {
      return null;
    }
  }

  renderSkills = e => {
    let render;

    try {
      render = this.props.skillsFilter.data.from.map((v, k) => {
        const skill = this.props.skillsAll.data.find(j => j.name === v.name);
        return <Skills
          key={k}
          desc={skill.description}
          name={v.name}
          mod={skill.abilityScore.name}/>;
      });
    } catch (err) {
      render = `...Loading`;
    }

    return render;
  }

  savingThrows = () => {
    return AbilityMap.map((v, k) => {
      return <SavingThrows
        key={k}
        label={v}
        mod={this.props.savingThrows.data[k]}
      />
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

          <Race />

          <br/>

          <Class />

          <br/>


          <label htmlFor="level">Level: </label>
          <input
            name="level"
            className="input"
            type="number"
            min="1"
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
            { this.props.alignmentAll.data.length
                ? this.handleAlignment()
                : <option value="">...Loading</option> }
          </select>

          <LevelFeatures />

          <br/><br/>

          <AbilityList />

          <br/><br/>

          <Stats />

          <br/><br/>

          <h3>Saving Throws</h3>

          <br/>

          <ul>
            { this.savingThrows() }
          </ul>

          <br/><br/>

          { this.props.spellsFilter.data.length
            ? <Spells />
            : null }

          <br/>

          <h3>Skills</h3>
          <h5>Choose { this.props.skillsFilter.data.choose }</h5>
          <button onClick={this.handleSkillReset}>Reset</button>
          <br/>

          { this.renderSkills() }

          <br />

          <Armor />

          <br/>

          <Weapons />
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  alignment: selectAlignment(state),
  alignmentAll: state.generator.alignmentAll,
  class: selectClass(state),
  classObj: selectClassObj(state),
  language: selectLanguage(state),
  languageList: selectLanguageList(state),
  level: selectLevel(state),
  race: selectRace(state),
  raceObj: selectRaceObj(state),
  skills: selectSkills(state),
  skillsAll: state.generator.skillsAll,
  skillsFilter: selectSkillsFilter(state),
  savingThrows: selectSavingThrows(state),
  spellsFilter: selectSpellsFilter(state),
  spellsList: state.generator.spellsList,
  subrace: selectSubRace(state)
});

const boundActions = {
  setAlignment,
  setAlignmentAll,
  setClass,
  setLanguage,
  setLevel,
  setSkills,
  setSkillsAll,
  setSpellsAll
};

export default connect(mapStateToProps, boundActions)(Generator);

/*
 * FIXME:
 * - RaceDB Normalization
 * - MountsDB Normalization
 * - GearDB Normalization
 * - KitsDB Normalization
 * - ClassDB Normalization
 * - Vicious Mockery - spellsDB
 * - Spare the Dying - spellsDB
 * - Warlock spells now work...but not sure if correct
 * - Cleric Destroy Undead feature ??
 */

/*
 * TODO:
 * - fix proficiency bonus on changing classes and leveling
 * - Setup proper error handling
 * - Level up characters
 * - Calculate startin money for characters
 * - In Classes: Constitution is for level 1 only.
 * - fantasynamegenerators for names
 */
