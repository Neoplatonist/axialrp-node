import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  selectAC,
  setAC,
  selectHP,
  setHP,
  setInitiative,
  setInspiration,
  setProficiencyBonus,
  setSpeed
} from '../../../../actions';

class Stats extends Component {
  render() {
    return (
      <div>
        <label htmlFor="hp">Hit Points (+CON): </label>
        <input
          name="hp"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setHP(e.target.value)}
          value={this.props.hp}/>

        <label htmlFor="ac">Armor Class: </label>
        <input
          name="ac"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setAC(e.target.value)}
          value={this.props.ac}/>

        <label htmlFor="initiative">Initiative: </label>
        <input
          name="initiative"
          className="input"
          type="number" 
          min="0"
          onChange={e => this.props.setInitiative(e.target.value)}
          value={this.props.initiative}/>

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

        <label htmlFor="proficiency">Proficiency Bonus: </label>
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
  ac: selectAC(state),
  hp: selectHP(state),
  initiative: state.generator.initiative,
  inspiration: state.generator.inspiration,
  proficiencyBonus: state.generator.proficiencyBonus,
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