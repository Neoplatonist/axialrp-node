import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  setAbility,
  setAbilityMod,
  setAlignment,
  setDice
} from '../../../../actions';

class Skills extends Component {
  render() {
    return (
      <li className="input">
        <input className="input" type="number" min="0" />
        { this.props.skill.name }
        <span>{ ' +(' + this.props.skill.ability_score.name + ')' }</span>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  ability: state.generator.ability,
  abilitMod: state.generator.abilitMod,
  alignment: state.generator.alignment,
  dice: state.generator.dice,
  race: state.generator.race,
  speed: state.generator.speed,
  subrace: state.generator.subrace
});

const boundActions = {
  setAbility,
  setAlignment,
  setAbilityMod,
  setDice
};

export default connect(mapStateToProps, boundActions)(Skills);