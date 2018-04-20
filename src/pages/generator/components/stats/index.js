import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  selectAbilityMod,
  selectAC,
  setAC,
  selectHP,
  selectHPTotal,
  setHP,
  selectInitiative,
  selectInitiativeTotal,
  setInitiative,
  setInspiration,
  selectProficiency,
  setProficiencyBonus,
  setSpeed
} from '../../../../actions';

class Stats extends Component {
  render() {
    return (
      <div>
        <div className="statsContainer">
          <label htmlFor="hp">Hit Points (+CON): </label>
          <input
            name="hp"
            className="stats stats-text"
            type="number"
            min="0"
            onChange={e => this.props.setHP(e.target.value)}
            value={this.props.hp.data}/>

          <div className="stats-append">{this.props.abilityMod.data[2]}</div>
          <div className="stats-append">{'= ' + this.props.hpTotal.data}</div>
        </div>

        <label htmlFor="ac">Armor Class: </label>
        <input
          name="ac"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setAC(e.target.value)}
          value={this.props.ac.data}/>

        <div className="statsContainer">
          <label htmlFor="initiative">Initiative (+DEX): </label>
          <input
            name="initiative"
            className="stats stats-text"
            type="number" 
            min="0"
            onChange={e => this.props.setInitiative(e.target.value)}
            value={this.props.initiative}/>

          <div className="stats-append">{this.props.abilityMod.data[1]}</div>
          <div className="stats-append">{'= ' + this.props.initiativeTotal.data}</div>
        </div>

        <label htmlFor="speed">Speed: </label>
        <input
          name="speed"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setSpeed(e.target.value)}
          value={this.props.speed}/>

        <label htmlFor="inspiration">Inspiration: </label>
        <input
          name="inspiration"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setInspiration(e.target.value)}
          value={this.props.inspiration}/>

        <label htmlFor="proficiency">Proficiency Bonus (+LVL): </label>
        <input
          name="proficiency"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setProficiencyBonus(e.target.value)}
          value={this.props.proficiencyBonus}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  abilityMod: selectAbilityMod(state),
  ac: selectAC(state),
  hp: selectHP(state),
  hpTotal: selectHPTotal(state),
  initiative: selectInitiative(state),
  initiativeTotal: selectInitiativeTotal(state),
  inspiration: state.generator.inspiration,
  proficiencyBonus: selectProficiency(state),
  speed: state.generator.speed,
});

const boundActions = {
  setAC,
  setHP,
  setInitiative,
  setInspiration,
  setProficiencyBonus,
  setSpeed
};

export default connect(mapStateToProps, boundActions)(Stats);