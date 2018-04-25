import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { 
  selectSpellsLock,
  setSpellsSelected 
} from '../../../../../../../../actions';

class SpellItem extends Component {
  state = {
    showDesc: false
  }

  componentDidUpdate() {
    if (this.props.spellsSelected[this.props.level].length === 0) {
      this.checkbox.checked = '';
    }
  }

  handleInput = e => {
    let selected = {...this.props.spellsSelected};
    let list = [...selected[this.props.level]];

    !this.checkbox.checked 
      ? list = list.filter(v => v.name !== this.props.spell.name) 
      : list.push(this.props.spell);

    selected[this.props.level] = list;
    this.props.setSpellsSelected(selected);
  }

  lock = () => {
    if (this.props.spellLock.total === true 
      || this.props.spellLock[this.props.level] === true) {
      return true;
    } else {
      return false;
    }
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.spellDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    const { spell } = this.props;
    return (
      <div> 
        <li className="input skillContainer"> 
          <input 
            type="checkbox"
            onClick={this.handleInput}
            disabled={this.lock()}
            ref={el => this.checkbox = el}
          />
          <div className="skill-text"> { spell !== undefined 
            ? spell.name
            : `---redacted---` }</div>

          <span className="skill-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

          <div 
            ref={ el => this.spellDesc = el } 
            className="skillDesc"
          >
            { spell.description }
          </div>
        </li> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spellLock: selectSpellsLock(state),
  spellsSelected: state.generator.spellsSelected
});

const boundActions = {
  setSpellsSelected
};

export default connect(mapStateToProps, boundActions)(SpellItem);