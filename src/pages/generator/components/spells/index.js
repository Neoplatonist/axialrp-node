import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  selectSpellsFilter
} from '../../../../actions';

class Spells extends Component {
  render() {
    return (
      <div>
        <h3>Spells List</h3>
        <h5>Show Cantrips</h5>
        <h5>Level 1</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spellsList: selectSpellsFilter(state)
});

const boundActions = {

};

export default connect(mapStateToProps, boundActions)(Spells);