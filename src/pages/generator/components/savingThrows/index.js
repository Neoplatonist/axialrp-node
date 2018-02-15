import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  setAbility,
  setAbilityMod,
  setAlignment,
  setDice,
  selectSavingThrows
} from '../../../../actions';

class SavingThrows extends Component {
  render() {
    return (
      <div>
        <h3>Saving Throws</h3>

        <br/>
        
        <ul>
          <li className="input">Strength: {this.props.savingThrows[0]}</li>
          <li className="input">Dexterity: {this.props.savingThrows[1]}</li>
          <li className="input">Constitution: {this.props.savingThrows[2]}</li>
          <li className="input">Intelligence: {this.props.savingThrows[3]}</li>
          <li className="input">Wisdom: {this.props.savingThrows[4]}</li>
          <li className="input">Charisma: {this.props.savingThrows[5]}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ability: state.generator.ability,
  abilitMod: state.generator.abilitMod,
  alignment: state.generator.alignment,
  dice: state.generator.dice,
  race: state.generator.race,
  savingThrows: selectSavingThrows(state),
  speed: state.generator.speed,
  subrace: state.generator.subrace
});

const boundActions = {
  setAbility,
  setAlignment,
  setAbilityMod,
  setDice
};

export default connect(mapStateToProps, boundActions)(SavingThrows);