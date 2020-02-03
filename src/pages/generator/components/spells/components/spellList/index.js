import React, { Component } from 'react';

import SpellItem from './components/spellItem';

import { connect } from 'react-redux';
import {
  selectClassObj,
  selectSpellsLock
} from '../../../../../../actions';

class SpellList extends Component {
  renderList = () => {
    const list = this.props.list.filter(v => v !== undefined)
    return list.map((v, k) => {
      return <SpellItem 
        key={k}
        spell={v} 
        level={this.props.name}
        choose={this.props.choose}
      />;
    });
  }

  renderTitle = () => {
    const level = this.props.name;
  
    switch(level) {
      case 0: return 'Cantrips';
      case 1: return '1st Level Spells';
      case 2: return '2nd Level Spells';
      case 3: return '3rd Level Spells';
      default: return `${level}th Level Spells`;
    }
  }

  render() {
    return (
      <div>
        <br />

        { this.props.list.length 
          ? <h5>{ this.renderTitle() } ({this.props.choose})</h5> 
          : '' }

        { this.props.list.length
          ? this.renderList()
          : '' }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classObj: selectClassObj(state),
  spellLock: selectSpellsLock(state),
});

const boundActions = {

};

export default connect(mapStateToProps, boundActions)(SpellList);