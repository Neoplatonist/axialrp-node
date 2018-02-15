/* eslint-disable import/first */
import React, { Component } from 'react';
import { AbilityMap } from '../../utils.js';
import Ability from './ability';

import { connect } from 'react-redux';
import {
  selectAbility,
  setAbility,
  selectAbilityMod,
  setAbilityMod
} from '../../../../actions';

class AbilityWithMod extends Component {
  renderAbility() {
    return AbilityMap.map((v, k) => {
      return (
        <Ability 
          key={k}
          value={this.props.ability[k]}
          onChange={e => 
            this.props.setAbility(k, parseInt(e.target.value, 10))}
          id={v} 
          mod={this.props.abilityMod[k]}
          label={v + ': '} />
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
});

const boundActions = {
  setAbility,
  setAbilityMod
};

export default connect(mapStateToProps, boundActions)(AbilityWithMod);