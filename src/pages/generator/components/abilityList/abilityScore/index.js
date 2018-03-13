/* eslint-disable import/first */
import React, { Component } from 'react';
import { AbilityMap } from '../../../utils.js';

import Ability from './ability';

import { connect } from 'react-redux';
import {
  selectAbility,
  setAbility,
  selectAbilityMod,
  selectAbilityRaceMod,
  selectAbilitySubRaceMod,
  selectAbilityTotal
} from '../../../../../actions';

class AbilityScores extends Component {
  renderAbility() {
    return AbilityMap.map((v, k) => {
      return (
        <Ability 
          id={v}
          key={k}
          index={k}
          race={this.props.abilityRaceMod[k]}
          subrace={this.props.abilitySubRaceMod[k]}
          total={this.props.abilityTotal[k]}
          value={this.props.ability[k]}
          mod={this.props.abilityMod[k]} />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderAbility()}
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  ability: selectAbility(state),
  abilityMod: selectAbilityMod(state),
  abilityRaceMod: selectAbilityRaceMod(state),
  abilitySubRaceMod: selectAbilitySubRaceMod(state),
  abilityTotal: selectAbilityTotal(state)
});

const boundActions = {
  setAbility
};

export default connect(mapStateToProps, boundActions)(AbilityScores);