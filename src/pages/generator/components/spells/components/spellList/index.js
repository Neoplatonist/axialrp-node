import React, { Component } from 'react';

import SpellItem from './components/spellItem';

export default class SpellList extends Component {
  renderList = () => {
    return this.props.list.map((v, k) => {
      return <SpellItem 
        key={k}
        spell={v} />
    })
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

        <h5>{ this.renderTitle() }</h5>

        { this.props.list.length 
            ? this.renderList()
            : `...Loading` }
      </div>
    );
  }
}