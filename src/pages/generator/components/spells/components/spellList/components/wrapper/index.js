import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../styles.css';

import { connect } from 'react-redux';
import {
  // selectSpells,
  // setSpells
  selectSpellLevel
} from '../../../../actions';

class Spells extends Component {
  state = {
    showDesc: false
  }

  componentDidUpdate() {
    if (this.props.spell.length === 0) {
      this.checkbox.checked = '';
    }
  }

  handleInput = (name, e) => {
    this.checkbox.checked ? this.checkbox.checked = name : this.checkbox.checked = '';

    let list = [...this.props.spell];

    !this.checkbox.checked ?
      list = list.filter(v => v !== name) :
      list.push(name)

    if (list.length > 1) {
      list = list.map(v => list.filter(j => v !== j)).filter(v => v.length);
    }

    this.props.setSpells(list);
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.skillDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    console.log(this.props.spellFilter)
    return (
      <li className="input skillContainer"> 
        <input 
          type="checkbox"
          onClick={this.handleInput.bind(this, this.props.spell.name)}
          disabled={this.props.spell.length > 1}
          ref={el => this.checkbox = el}
        />
        <div className="skill-text"> { this.props.spell.name }</div>
        {/* <div className="skill-append"> ({ this.props.mod.slice(0, 3).toUpperCase() })</div> */}
        <span className="skill-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

        <div 
          ref={ el => this.skillDesc = el } 
          className="skillDesc"
        >
          {this.props.spell.description}
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  // spell: selectSpells(state)
  spellFilter: selectSpellLevel(state)
});

const boundActions = {
  // setSpells
};

export default connect(mapStateToProps, boundActions)(Spells);