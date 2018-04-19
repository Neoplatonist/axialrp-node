import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
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
        name={k}/>
    });
  }

  render() {
    return (
      <div>
        <h3>Spells</h3>
        {/* <h5>Choose {this.props.skillsFilter.choose}</h5> */}
        {/* <button onClick={this.handleSkillReset} >Reset</button> */}

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
  // spell: selectSpells(state)
  // spellFilter: selectSpellLevel(state)
  spellsFilter: selectSpellsFilter(state)
});

const boundActions = {
  // setSpells
};

export default connect(mapStateToProps, boundActions)(Spells);