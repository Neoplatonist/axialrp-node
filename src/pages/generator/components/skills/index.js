import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  selectSkills,
  setSkills,
  selectSkillsFilter
} from '../../../../actions';

class Skills extends Component {
  state = {
    showDesc: false
  }

  componentDidUpdate() {
    if (this.props.skills.length === 0) {
      this.checkbox.checked = '';
    }
  }

  handleInput = (name, e) => {
    let list = [...this.props.skills];

    if (this.checkbox.checked) {
      this.checkbox.checked = name;
      list.push(name);
    } else {
      this.checkbox.checked = '';
      list = list.filter(v => v !== name) ;
    }

    if (list.length > 1) {
      list = list.map(v => 
        list.filter(j => v !== j))
          .filter(v => v.length);
    }

    this.props.setSkills(list);
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.skillDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    return (
      <li className="input skillContainer"> 
        <input 
          type="checkbox"
          onClick={this.handleInput.bind(this, this.props.name)}
          disabled={this.props.skills.length === this.props.skillsFilter.data.choose}
          ref={el => this.checkbox = el}
        />
        <div className="skill-text"> { this.props.name }</div>
        <div className="skill-append"> ({ this.props.mod.slice(0, 3).toUpperCase() })</div>
        <span className="skill-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

        <div 
          ref={ el => this.skillDesc = el } 
          className="skillDesc"
        >
          {this.props.desc}
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  skills: selectSkills(state),
  skillsFilter: selectSkillsFilter(state)
});

const boundActions = {
  setSkills
};

export default connect(mapStateToProps, boundActions)(Skills);