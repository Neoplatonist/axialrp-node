import React, { Component } from 'react';

import SpellItem from './components/spellItem';

import { connect } from 'react-redux';
import {
  selectClassObj
} from '../../../../../../actions';

class SpellList extends Component {
  renderList = () => {
    return this.props.list.map((v, k) => {
      if (v !== undefined) {
        return <SpellItem 
          key={k}
          spell={v} />;
      }
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

        <h5>{ this.renderTitle() } ({this.props.choose})</h5>

        { this.props.list.length
          ? this.renderList()
          : `...Loading` }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classObj: selectClassObj(state)
});

const boundActions = {

};

export default connect(mapStateToProps, boundActions)(SpellList);