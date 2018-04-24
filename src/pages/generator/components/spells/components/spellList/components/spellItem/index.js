import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SpellItem extends Component {
  state = {
    showDesc: false
  }

  componentDidUpdate() {
    if (this.props.spell.length === 0) {
      this.checkbox.checked = '';
    }
  }

  handleInput = e => {
    // this.checkbox.checked ? this.checkbox.checked = name : this.checkbox.checked = '';

    // let list = [...this.props.spell];

    // !this.checkbox.checked ?
    //   list = list.filter(v => v !== name) :
    //   list.push(name)

    // if (list.length > 1) {
    //   list = list.map(v => list.filter(j => v !== j)).filter(v => v.length);
    // }

    // this.props.setSpells(list);
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
            onClick={this.handleInput.bind(this, spell.name)}
            // disabled={this.props.spell.length > 1}
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