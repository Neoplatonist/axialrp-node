import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  selectClassObj,
  selectLevel,
  // selectSpells,
  // setSpells
  selectSpellsFilter
} from '../../../../actions';

import SpellList from './components/spellList';

class Spells extends Component {
  renderSpellLists = () => {
    return this.props.spellsFilter.data.map((v, k) => {
      return <SpellList
        key={k}
        list={v}
        name={k}
        choose={this.props.classObj.data.levels[this.props.level].type[k]}
        />
    });
  }

  // TODO: Add proper error handling and 
  // see how to add barbarian rage instead of spells
  renderSpellChoose = () => {
    let result;

    try {
      result = 'Choose ' + this.props.classObj.data
        .levels[this.props.level].spells_known
    } catch (err) {
      result = 'nuthin'
    }

    return result;
  }

  resetSpells = e => {
    console.log(e.target)
  }

  render() {
    return (
      <div>
        <h3>Spells</h3>
        <h4>{ this.renderSpellChoose() }</h4>
        <button onClick={this.resetSpells}>Reset</button>

        { this.props.spellsFilter.status === 'success' 
            ? this.renderSpellLists()
            : this.props.spellsFilter.status }

        {/* { this.props.spellList.length 
            ? this.renderSpells
            : null } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classObj: selectClassObj(state),
  level: selectLevel(state),
  // spell: selectSpells(state)
  // spellFilter: selectSpellLevel(state)
  spellsFilter: selectSpellsFilter(state)
});

const boundActions = {
  // setSpells
};

export default connect(mapStateToProps, boundActions)(Spells);